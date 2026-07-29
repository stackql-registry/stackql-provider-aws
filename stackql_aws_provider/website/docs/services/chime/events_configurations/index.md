--- 
title: events_configurations
hide_title: false
hide_table_of_contents: false
keywords:
  - events_configurations
  - chime
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

Creates, updates, deletes, gets or lists an <code>events_configurations</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="events_configurations" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.chime.events_configurations" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_events_configuration"
    values={[
        { label: 'get_events_configuration', value: 'get_events_configuration' }
    ]}
>
<TabItem value="get_events_configuration">

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
    <td><CopyableCode code="bot_id" /></td>
    <td><code>string</code></td>
    <td>The bot ID.</td>
</tr>
<tr>
    <td><CopyableCode code="lambda_function_arn" /></td>
    <td><code>string</code></td>
    <td>Lambda function ARN that allows a bot to receive outgoing events.</td>
</tr>
<tr>
    <td><CopyableCode code="outbound_events_https_endpoint" /></td>
    <td><code>string</code></td>
    <td>HTTPS endpoint that allows a bot to receive outgoing events.</td>
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
    <td><a href="#get_events_configuration"><CopyableCode code="get_events_configuration" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-account_id"><code>account_id</code></a>, <a href="#parameter-bot_id"><code>bot_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets details for an events configuration that allows a bot to receive outgoing events, such as an HTTPS endpoint or Lambda function ARN.</td>
</tr>
<tr>
    <td><a href="#put_events_configuration"><CopyableCode code="put_events_configuration" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-account_id"><code>account_id</code></a>, <a href="#parameter-bot_id"><code>bot_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Creates an events configuration that allows a bot to receive outgoing events sent by Amazon Chime. Choose either an HTTPS endpoint or a Lambda function ARN. For more information, see Bot.</td>
</tr>
<tr>
    <td><a href="#delete_events_configuration"><CopyableCode code="delete_events_configuration" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-account_id"><code>account_id</code></a>, <a href="#parameter-bot_id"><code>bot_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes the events configuration that allows a bot to receive outgoing events.</td>
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
<tr id="parameter-account_id">
    <td><CopyableCode code="account_id" /></td>
    <td><code>string</code></td>
    <td>The Amazon Chime account ID.</td>
</tr>
<tr id="parameter-bot_id">
    <td><CopyableCode code="bot_id" /></td>
    <td><code>string</code></td>
    <td>The bot ID.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_events_configuration"
    values={[
        { label: 'get_events_configuration', value: 'get_events_configuration' }
    ]}
>
<TabItem value="get_events_configuration">

Gets details for an events configuration that allows a bot to receive outgoing events, such as an HTTPS endpoint or Lambda function ARN.

```sql
SELECT
bot_id,
lambda_function_arn,
outbound_events_https_endpoint
FROM aws.chime.events_configurations
WHERE account_id = '{{ account_id }}' -- required
AND bot_id = '{{ bot_id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `REPLACE` examples

<Tabs
    defaultValue="put_events_configuration"
    values={[
        { label: 'put_events_configuration', value: 'put_events_configuration' }
    ]}
>
<TabItem value="put_events_configuration">

Creates an events configuration that allows a bot to receive outgoing events sent by Amazon Chime. Choose either an HTTPS endpoint or a Lambda function ARN. For more information, see Bot.

```sql
REPLACE aws.chime.events_configurations
SET 
OutboundEventsHTTPSEndpoint = '{{ OutboundEventsHTTPSEndpoint }}',
LambdaFunctionArn = '{{ LambdaFunctionArn }}'
WHERE 
account_id = '{{ account_id }}' --required
AND bot_id = '{{ bot_id }}' --required
AND region = '{{ region }}' --required
RETURNING
events_configuration;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_events_configuration"
    values={[
        { label: 'delete_events_configuration', value: 'delete_events_configuration' }
    ]}
>
<TabItem value="delete_events_configuration">

Deletes the events configuration that allows a bot to receive outgoing events.

```sql
DELETE FROM aws.chime.events_configurations
WHERE account_id = '{{ account_id }}' --required
AND bot_id = '{{ bot_id }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
