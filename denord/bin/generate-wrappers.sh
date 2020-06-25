#!/bin/bash

declare -a skip=(
    "AuditLogChange"
    "GatewayPayload"
    "GuildMemberAddEvent"
    "Message"
    "Overwrite"
)

ignore() {
    for i in "${skip[@]}"
    do
        if [[ "$1" == *"$i.ts" ]]
        then
            return 0
        fi
    done

    return 1
}

mkdir -p denord/structure

for file in denord/raw/Raw*.ts
do
    if ignore "$file"
    then
        continue
    fi

    dest=$(echo $file | sed -e 's@^denord/raw/Raw@@')
    cat $file | deno run ./denord/bin/raw-to-wrapped.ts > ./denord/structure/$dest
done
