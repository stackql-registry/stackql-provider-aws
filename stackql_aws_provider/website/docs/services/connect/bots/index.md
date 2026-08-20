--- 
title: bots
hide_title: false
hide_table_of_contents: false
keywords:
  - bots
  - connect
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

Creates, updates, deletes, gets or lists a <code>bots</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="bots" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.connect.bots" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_bots"
    values={[
        { label: 'list_bots', value: 'list_bots' }
    ]}
>
<TabItem value="list_bots">

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
    <td><CopyableCode code="lex_bot" /></td>
    <td><code>object</code></td>
    <td>Configuration information of an Amazon Lex bot.</td>
</tr>
<tr>
    <td><CopyableCode code="lex_v2_bot" /></td>
    <td><code>object</code></td>
    <td>Configuration information of an Amazon Lex V2 bot.</td>
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
    <td><a href="#list_bots"><CopyableCode code="list_bots" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-instance_id"><code>instance_id</code></a>, <a href="#parameter-lexVersion"><code>lexVersion</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-nextToken"><code>nextToken</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a></td>
    <td>This API is in preview release for Connect Customer and is subject to change. For the specified version of Amazon Lex, returns a paginated list of all the Amazon Lex bots currently associated with the instance. Use this API to return both Amazon Lex V1 and V2 bots.</td>
</tr>
<tr>
    <td><a href="#associate_bot"><CopyableCode code="associate_bot" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-instance_id"><code>instance_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>This API is in preview release for Connect Customer and is subject to change. Allows the specified Connect Customer instance to access the specified Amazon Lex or Amazon Lex V2 bot.</td>
</tr>
<tr>
    <td><a href="#disassociate_bot"><CopyableCode code="disassociate_bot" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-instance_id"><code>instance_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>This API is in preview release for Connect Customer and is subject to change. Revokes authorization from the specified instance to access the specified Amazon Lex or Amazon Lex V2 bot.</td>
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
<tr id="parameter-instance_id">
    <td><CopyableCode code="instance_id" /></td>
    <td><code>string</code></td>
    <td>The identifier of the Connect Customer instance. You can find the instance ID in the Amazon Resource Name (ARN) of the instance.</td>
</tr>
<tr id="parameter-lexVersion">
    <td><CopyableCode code="lexVersion" /></td>
    <td><code>string</code></td>
    <td>The version of Amazon Lex or Amazon Lex V2.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of results to return per page.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="list_bots"
    values={[
        { label: 'list_bots', value: 'list_bots' }
    ]}
>
<TabItem value="list_bots">

This API is in preview release for Connect Customer and is subject to change. For the specified version of Amazon Lex, returns a paginated list of all the Amazon Lex bots currently associated with the instance. Use this API to return both Amazon Lex V1 and V2 bots.

```sql
SELECT
lex_bot,
lex_v2_bot
FROM aws.connect.bots
WHERE instance_id = '{{ instance_id }}' -- required
AND lexVersion = '{{ lexVersion }}' -- required
AND region = '{{ region }}' -- required
AND nextToken = '{{ nextToken }}'
AND maxResults = '{{ maxResults }}'
;
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="associate_bot"
    values={[
        { label: 'associate_bot', value: 'associate_bot' }
    ]}
>
<TabItem value="associate_bot">

This API is in preview release for Connect Customer and is subject to change. Allows the specified Connect Customer instance to access the specified Amazon Lex or Amazon Lex V2 bot.

```sql
UPDATE aws.connect.bots
SET 
LexBot = '{{ LexBot }}',
LexV2Bot = '{{ LexV2Bot }}',
ClientToken = '{{ ClientToken }}'
WHERE 
instance_id = '{{ instance_id }}' --required
AND region = '{{ region }}' --required;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="disassociate_bot"
    values={[
        { label: 'disassociate_bot', value: 'disassociate_bot' }
    ]}
>
<TabItem value="disassociate_bot">

This API is in preview release for Connect Customer and is subject to change. Revokes authorization from the specified instance to access the specified Amazon Lex or Amazon Lex V2 bot.

```sql
EXEC aws.connect.bots.disassociate_bot 
@instance_id='{{ instance_id }}' --required, 
@region='{{ region }}' --required 
@@json=
'{
"LexBot": "{{ LexBot }}", 
"LexV2Bot": "{{ LexV2Bot }}", 
"ClientToken": "{{ ClientToken }}"
}'
;
```
</TabItem>
</Tabs>
