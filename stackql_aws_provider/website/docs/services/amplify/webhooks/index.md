--- 
title: webhooks
hide_title: false
hide_table_of_contents: false
keywords:
  - webhooks
  - amplify
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

Creates, updates, deletes, gets or lists a <code>webhooks</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="webhooks" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.amplify.webhooks" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_webhooks"
    values={[
        { label: 'list_webhooks', value: 'list_webhooks' },
        { label: 'get_webhook', value: 'get_webhook' }
    ]}
>
<TabItem value="list_webhooks">

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
    <td><CopyableCode code="next_token" /></td>
    <td><code>string</code></td>
    <td>A pagination token. If non-null, the pagination token is returned in a result. Pass its value in another request to retrieve more entries. (pattern: &lt;code&gt;(?s).*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="webhooks" /></td>
    <td><code>array</code></td>
    <td>A list of webhooks.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="get_webhook">

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
    <td><CopyableCode code="app_id" /></td>
    <td><code>string</code></td>
    <td>The unique ID of an Amplify app. (pattern: &lt;code&gt;d&#91;a-z0-9&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="branch_name" /></td>
    <td><code>string</code></td>
    <td>The name for a branch that is part of an Amplify app. (pattern: &lt;code&gt;(?s).+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="create_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>A timestamp of when Amplify created the webhook in your Git repository.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The description for a webhook. (pattern: &lt;code&gt;(?s).*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="update_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>A timestamp of when Amplify updated the webhook in your Git repository.</td>
</tr>
<tr>
    <td><CopyableCode code="webhook_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) for the webhook.</td>
</tr>
<tr>
    <td><CopyableCode code="webhook_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the webhook. (pattern: &lt;code&gt;(?s).*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="webhook_url" /></td>
    <td><code>string</code></td>
    <td>The URL of the webhook.</td>
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
    <td><a href="#list_webhooks"><CopyableCode code="list_webhooks" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-app_id"><code>app_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-nextToken"><code>nextToken</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a></td>
    <td>Returns a list of webhooks for an Amplify app.</td>
</tr>
<tr>
    <td><a href="#get_webhook"><CopyableCode code="get_webhook" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-webhook_id"><code>webhook_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns the webhook information that corresponds to a specified webhook ID.</td>
</tr>
<tr>
    <td><a href="#create_webhook"><CopyableCode code="create_webhook" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-app_id"><code>app_id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-branchName"><code>branchName</code></a></td>
    <td></td>
    <td>Creates a new webhook on an Amplify app.</td>
</tr>
<tr>
    <td><a href="#update_webhook"><CopyableCode code="update_webhook" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-webhook_id"><code>webhook_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Updates a webhook.</td>
</tr>
<tr>
    <td><a href="#delete_webhook"><CopyableCode code="delete_webhook" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-webhook_id"><code>webhook_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a webhook.</td>
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
<tr id="parameter-app_id">
    <td><CopyableCode code="app_id" /></td>
    <td><code>string</code></td>
    <td>The unique ID for an Amplify app.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-webhook_id">
    <td><CopyableCode code="webhook_id" /></td>
    <td><code>string</code></td>
    <td>The unique ID for a webhook.</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of records to list in a single response.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>A pagination token. Set to null to start listing webhooks from the start. If non-null,the pagination token is returned in a result. Pass its value in here to list more webhooks.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="list_webhooks"
    values={[
        { label: 'list_webhooks', value: 'list_webhooks' },
        { label: 'get_webhook', value: 'get_webhook' }
    ]}
>
<TabItem value="list_webhooks">

Returns a list of webhooks for an Amplify app.

```sql
SELECT
next_token,
webhooks
FROM aws.amplify.webhooks
WHERE app_id = '{{ app_id }}' -- required
AND region = '{{ region }}' -- required
AND nextToken = '{{ nextToken }}'
AND maxResults = '{{ maxResults }}'
;
```
</TabItem>
<TabItem value="get_webhook">

Returns the webhook information that corresponds to a specified webhook ID.

```sql
SELECT
app_id,
branch_name,
create_time,
description,
update_time,
webhook_arn,
webhook_id,
webhook_url
FROM aws.amplify.webhooks
WHERE webhook_id = '{{ webhook_id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_webhook"
    values={[
        { label: 'create_webhook', value: 'create_webhook' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_webhook">

Creates a new webhook on an Amplify app.

```sql
INSERT INTO aws.amplify.webhooks (
branchName,
description,
app_id,
region
)
SELECT 
'{{ branchName }}' /* required */,
'{{ description }}',
'{{ app_id }}',
'{{ region }}'
RETURNING
webhook
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: webhooks
  props:
    - name: app_id
      value: "{{ app_id }}"
      description: Required parameter for the webhooks resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the webhooks resource.
    - name: branchName
      value: "{{ branchName }}"
    - name: description
      value: "{{ description }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_webhook"
    values={[
        { label: 'update_webhook', value: 'update_webhook' }
    ]}
>
<TabItem value="update_webhook">

Updates a webhook.

```sql
UPDATE aws.amplify.webhooks
SET 
branchName = '{{ branchName }}',
description = '{{ description }}'
WHERE 
webhook_id = '{{ webhook_id }}' --required
AND region = '{{ region }}' --required
RETURNING
webhook;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_webhook"
    values={[
        { label: 'delete_webhook', value: 'delete_webhook' }
    ]}
>
<TabItem value="delete_webhook">

Deletes a webhook.

```sql
DELETE FROM aws.amplify.webhooks
WHERE webhook_id = '{{ webhook_id }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
