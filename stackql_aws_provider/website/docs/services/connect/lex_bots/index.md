--- 
title: lex_bots
hide_title: false
hide_table_of_contents: false
keywords:
  - lex_bots
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

Creates, updates, deletes, gets or lists a <code>lex_bots</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="lex_bots" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.connect.lex_bots" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_lex_bots"
    values={[
        { label: 'list_lex_bots', value: 'list_lex_bots' }
    ]}
>
<TabItem value="list_lex_bots">

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
    <td><CopyableCode code="LexRegion" /></td>
    <td><code>string</code></td>
    <td>The Amazon Web Services Region where the Amazon Lex bot was created.</td>
</tr>
<tr>
    <td><CopyableCode code="Name" /></td>
    <td><code>string</code></td>
    <td>The name of the Amazon Lex bot.</td>
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
    <td><a href="#list_lex_bots"><CopyableCode code="list_lex_bots" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-instance_id"><code>instance_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-nextToken"><code>nextToken</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a></td>
    <td>This API is in preview release for Amazon Connect and is subject to change. Returns a paginated list of all the Amazon Lex V1 bots currently associated with the instance. To return both Amazon Lex V1 and V2 bots, use the ListBots API.</td>
</tr>
<tr>
    <td><a href="#disassociate_lex_bot"><CopyableCode code="disassociate_lex_bot" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-instance_id"><code>instance_id</code></a>, <a href="#parameter-botName"><code>botName</code></a>, <a href="#parameter-lexRegion"><code>lexRegion</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-clientToken"><code>clientToken</code></a></td>
    <td>This API is in preview release for Amazon Connect and is subject to change. Revokes authorization from the specified instance to access the specified Amazon Lex bot.</td>
</tr>
<tr>
    <td><a href="#associate_lex_bot"><CopyableCode code="associate_lex_bot" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-instance_id"><code>instance_id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-LexBot"><code>LexBot</code></a></td>
    <td></td>
    <td>This API is in preview release for Amazon Connect and is subject to change. Allows the specified Amazon Connect instance to access the specified Amazon Lex V1 bot. This API only supports the association of Amazon Lex V1 bots.</td>
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
<tr id="parameter-botName">
    <td><CopyableCode code="botName" /></td>
    <td><code>string</code></td>
    <td>The name of the Amazon Lex bot. Maximum character limit of 50.</td>
</tr>
<tr id="parameter-instance_id">
    <td><CopyableCode code="instance_id" /></td>
    <td><code>string</code></td>
    <td>The identifier of the Amazon Connect instance. You can find the instance ID in the Amazon Resource Name (ARN) of the instance.</td>
</tr>
<tr id="parameter-lexRegion">
    <td><CopyableCode code="lexRegion" /></td>
    <td><code>string</code></td>
    <td>The Amazon Web Services Region in which the Amazon Lex bot has been created.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-clientToken">
    <td><CopyableCode code="clientToken" /></td>
    <td><code>string</code></td>
    <td>A unique, case-sensitive identifier that you provide to ensure the idempotency of the request. If not provided, the Amazon Web Services SDK populates this field. For more information about idempotency, see Making retries safe with idempotent APIs.</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of results to return per page. If no value is specified, the default is 10.</td>
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
    defaultValue="list_lex_bots"
    values={[
        { label: 'list_lex_bots', value: 'list_lex_bots' }
    ]}
>
<TabItem value="list_lex_bots">

This API is in preview release for Amazon Connect and is subject to change. Returns a paginated list of all the Amazon Lex V1 bots currently associated with the instance. To return both Amazon Lex V1 and V2 bots, use the ListBots API.

```sql
SELECT
LexRegion,
Name
FROM aws.connect.lex_bots
WHERE instance_id = '{{ instance_id }}' -- required
AND region = '{{ region }}' -- required
AND nextToken = '{{ nextToken }}'
AND maxResults = '{{ maxResults }}'
;
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="disassociate_lex_bot"
    values={[
        { label: 'disassociate_lex_bot', value: 'disassociate_lex_bot' },
        { label: 'associate_lex_bot', value: 'associate_lex_bot' }
    ]}
>
<TabItem value="disassociate_lex_bot">

This API is in preview release for Amazon Connect and is subject to change. Revokes authorization from the specified instance to access the specified Amazon Lex bot.

```sql
UPDATE aws.connect.lex_bots
SET 
-- No updatable properties
WHERE 
instance_id = '{{ instance_id }}' --required
AND botName = '{{ botName }}' --required
AND lexRegion = '{{ lexRegion }}' --required
AND region = '{{ region }}' --required
AND clientToken = '{{ clientToken}}';
```
</TabItem>
<TabItem value="associate_lex_bot">

This API is in preview release for Amazon Connect and is subject to change. Allows the specified Amazon Connect instance to access the specified Amazon Lex V1 bot. This API only supports the association of Amazon Lex V1 bots.

```sql
UPDATE aws.connect.lex_bots
SET 
LexBot = '{{ LexBot }}',
ClientToken = '{{ ClientToken }}'
WHERE 
instance_id = '{{ instance_id }}' --required
AND region = '{{ region }}' --required
AND LexBot = '{{ LexBot }}' --required;
```
</TabItem>
</Tabs>
