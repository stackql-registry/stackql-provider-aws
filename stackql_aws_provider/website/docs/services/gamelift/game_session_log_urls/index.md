--- 
title: game_session_log_urls
hide_title: false
hide_table_of_contents: false
keywords:
  - game_session_log_urls
  - gamelift
  - aws
  - infrastructure-as-code
  - configuration-as-data
  - cloud inventory
description: Query, deploy and manage aws resources using SQL
custom_edit_url: null
image: /img/stackql-aws-provider-featured-image.png
---

import CopyableCode from '@site/src/components/CopyableCode/CopyableCode';
import CodeBlock from '@theme/CodeBlock';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Creates, updates, deletes, gets or lists a <code>game_session_log_urls</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="game_session_log_urls" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.gamelift.game_session_log_urls" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_game_session_log_url"
    values={[
        { label: 'get_game_session_log_url', value: 'get_game_session_log_url' }
    ]}
>
<TabItem value="get_game_session_log_url">

<table>
<thead>
    <tr>
    <th>Name</th>
    <th>Datatype</th>
    <th>Description</th>
    </tr>
</thead>
<tbody>
<tr>
    <td><CopyableCode code="pre_signed_url" /></td>
    <td><code>string</code></td>
    <td>Location of the requested game session logs, available for download. This URL is valid for 15 minutes, after which S3 will reject any download request using this URL. You can request a new URL any time within the 14-day period that the logs are retained.</td>
</tr>
</tbody>
</table>
</TabItem>
</Tabs>

## Methods

The following methods are available for this resource:

<table>
<thead>
    <tr>
    <th>Name</th>
    <th>Accessible by</th>
    <th>Required Params</th>
    <th>Optional Params</th>
    <th>Description</th>
    </tr>
</thead>
<tbody>
<tr>
    <td><a href="#get_game_session_log_url"><CopyableCode code="get_game_session_log_url" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>This API works with the following fleet types: EC2 Retrieves the location of stored game session logs for a specified game session on Amazon GameLift Servers managed fleets. When a game session is terminated, Amazon GameLift Servers automatically stores the logs in Amazon S3 and retains them for 14 days. Use this URL to download the logs. See the Amazon Web Services Service Limits page for maximum log file sizes. Log files that exceed this limit are not saved. All APIs by task</td>
</tr>
</tbody>
</table>

## Parameters

Parameters can be passed in the `WHERE` clause of a query. Check the [Methods](#methods) section to see which parameters are required or optional for each operation.

<table>
<thead>
    <tr>
    <th>Name</th>
    <th>Datatype</th>
    <th>Description</th>
    </tr>
</thead>
<tbody>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_game_session_log_url"
    values={[
        { label: 'get_game_session_log_url', value: 'get_game_session_log_url' }
    ]}
>
<TabItem value="get_game_session_log_url">

This API works with the following fleet types: EC2 Retrieves the location of stored game session logs for a specified game session on Amazon GameLift Servers managed fleets. When a game session is terminated, Amazon GameLift Servers automatically stores the logs in Amazon S3 and retains them for 14 days. Use this URL to download the logs. See the Amazon Web Services Service Limits page for maximum log file sizes. Log files that exceed this limit are not saved. All APIs by task

```sql
SELECT
pre_signed_url
FROM aws.gamelift.game_session_log_urls
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
