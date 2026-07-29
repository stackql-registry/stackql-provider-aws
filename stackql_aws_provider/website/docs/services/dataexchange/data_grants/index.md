--- 
title: data_grants
hide_title: false
hide_table_of_contents: false
keywords:
  - data_grants
  - dataexchange
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

Creates, updates, deletes, gets or lists a <code>data_grants</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="data_grants" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.dataexchange.data_grants" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_data_grant"
    values={[
        { label: 'get_data_grant', value: 'get_data_grant' },
        { label: 'list_data_grants', value: 'list_data_grants' }
    ]}
>
<TabItem value="get_data_grant">

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
    <td><CopyableCode code="acceptance_state" /></td>
    <td><code>string</code></td>
    <td>The acceptance state of the data grant. (PENDING_RECEIVER_ACCEPTANCE, ACCEPTED)</td>
</tr>
<tr>
    <td><CopyableCode code="accepted_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp of when the data grant was accepted.</td>
</tr>
<tr>
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the data grant.</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp of when the data grant was created.</td>
</tr>
<tr>
    <td><CopyableCode code="data_set_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the data set associated to the data grant. (pattern: &lt;code&gt;&#91;a-zA-Z0-9&#93;&#123;30,40&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The description of the data grant.</td>
</tr>
<tr>
    <td><CopyableCode code="ends_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp of when access to the associated data set ends.</td>
</tr>
<tr>
    <td><CopyableCode code="grant_distribution_scope" /></td>
    <td><code>string</code></td>
    <td>The distribution scope for the data grant. (AWS_ORGANIZATION, NONE)</td>
</tr>
<tr>
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>The ID of the data grant. (pattern: &lt;code&gt;&#91;a-zA-Z0-9&#93;&#123;30,40&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the data grant.</td>
</tr>
<tr>
    <td><CopyableCode code="receiver_principal" /></td>
    <td><code>string</code></td>
    <td>The Amazon Web Services account ID of the data grant receiver. (pattern: &lt;code&gt;\d&#123;12&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="sender_principal" /></td>
    <td><code>string</code></td>
    <td>The Amazon Web Services account ID of the data grant sender. (pattern: &lt;code&gt;\d&#123;12&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="source_data_set_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the data set used to create the data grant. (pattern: &lt;code&gt;&#91;a-zA-Z0-9&#93;&#123;30,40&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>object</code></td>
    <td>The tags associated to the data grant. A tag is a key-value pair.</td>
</tr>
<tr>
    <td><CopyableCode code="updated_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp of when the data grant was last updated.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_data_grants">

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
    <td><CopyableCode code="acceptance_state" /></td>
    <td><code>string</code></td>
    <td>The acceptance state of the data grant. (PENDING_RECEIVER_ACCEPTANCE, ACCEPTED)</td>
</tr>
<tr>
    <td><CopyableCode code="accepted_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp of when the data grant was accepted.</td>
</tr>
<tr>
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the data grant.</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp of when the data grant was created.</td>
</tr>
<tr>
    <td><CopyableCode code="data_set_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the data set associated to the data grant. (pattern: &lt;code&gt;&#91;a-zA-Z0-9&#93;&#123;30,40&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="ends_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp of when access to the associated data set ends.</td>
</tr>
<tr>
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>The ID of the data grant. (pattern: &lt;code&gt;&#91;a-zA-Z0-9&#93;&#123;30,40&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the data grant.</td>
</tr>
<tr>
    <td><CopyableCode code="receiver_principal" /></td>
    <td><code>string</code></td>
    <td>The Amazon Web Services account ID of the data grant receiver. (pattern: &lt;code&gt;\d&#123;12&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="sender_principal" /></td>
    <td><code>string</code></td>
    <td>The Amazon Web Services account ID of the data grant sender. (pattern: &lt;code&gt;\d&#123;12&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="source_data_set_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the data set used to create the data grant. (pattern: &lt;code&gt;&#91;a-zA-Z0-9&#93;&#123;30,40&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="updated_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp of when the data grant was last updated.</td>
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
    <td><a href="#get_data_grant"><CopyableCode code="get_data_grant" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-data_grant_id"><code>data_grant_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>This operation returns information about a data grant.</td>
</tr>
<tr>
    <td><a href="#list_data_grants"><CopyableCode code="list_data_grants" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-nextToken"><code>nextToken</code></a></td>
    <td>This operation returns information about all data grants.</td>
</tr>
<tr>
    <td><a href="#create_data_grant"><CopyableCode code="create_data_grant" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-GrantDistributionScope"><code>GrantDistributionScope</code></a>, <a href="#parameter-ReceiverPrincipal"><code>ReceiverPrincipal</code></a>, <a href="#parameter-SourceDataSetId"><code>SourceDataSetId</code></a></td>
    <td></td>
    <td>This operation creates a data grant.</td>
</tr>
<tr>
    <td><a href="#delete_data_grant"><CopyableCode code="delete_data_grant" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-data_grant_id"><code>data_grant_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>This operation deletes a data grant.</td>
</tr>
<tr>
    <td><a href="#accept_data_grant"><CopyableCode code="accept_data_grant" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-data_grant_arn"><code>data_grant_arn</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>This operation accepts a data grant.</td>
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
<tr id="parameter-data_grant_arn">
    <td><CopyableCode code="data_grant_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the data grant to accept.</td>
</tr>
<tr id="parameter-data_grant_id">
    <td><CopyableCode code="data_grant_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the data grant to delete.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of results to be included in the next page.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>The pagination token used to retrieve the next page of results for this operation.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_data_grant"
    values={[
        { label: 'get_data_grant', value: 'get_data_grant' },
        { label: 'list_data_grants', value: 'list_data_grants' }
    ]}
>
<TabItem value="get_data_grant">

This operation returns information about a data grant.

```sql
SELECT
acceptance_state,
accepted_at,
arn,
created_at,
data_set_id,
description,
ends_at,
grant_distribution_scope,
id,
name,
receiver_principal,
sender_principal,
source_data_set_id,
tags,
updated_at
FROM aws.dataexchange.data_grants
WHERE data_grant_id = '{{ data_grant_id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_data_grants">

This operation returns information about all data grants.

```sql
SELECT
acceptance_state,
accepted_at,
arn,
created_at,
data_set_id,
ends_at,
id,
name,
receiver_principal,
sender_principal,
source_data_set_id,
updated_at
FROM aws.dataexchange.data_grants
WHERE region = '{{ region }}' -- required
AND maxResults = '{{ maxResults }}'
AND nextToken = '{{ nextToken }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_data_grant"
    values={[
        { label: 'create_data_grant', value: 'create_data_grant' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_data_grant">

This operation creates a data grant.

```sql
INSERT INTO aws.dataexchange.data_grants (
Name,
GrantDistributionScope,
ReceiverPrincipal,
SourceDataSetId,
EndsAt,
Description,
Tags,
region
)
SELECT 
'{{ Name }}',
'{{ GrantDistributionScope }}' /* required */,
'{{ ReceiverPrincipal }}' /* required */,
'{{ SourceDataSetId }}' /* required */,
'{{ EndsAt }}',
'{{ Description }}',
'{{ Tags }}',
'{{ region }}'
RETURNING
acceptance_state,
accepted_at,
arn,
created_at,
data_set_id,
description,
ends_at,
grant_distribution_scope,
id,
name,
receiver_principal,
sender_principal,
source_data_set_id,
tags,
updated_at
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: data_grants
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the data_grants resource.
    - name: Name
      value: "{{ Name }}"
    - name: GrantDistributionScope
      value: "{{ GrantDistributionScope }}"
      valid_values: ['AWS_ORGANIZATION', 'NONE']
    - name: ReceiverPrincipal
      value: "{{ ReceiverPrincipal }}"
    - name: SourceDataSetId
      value: "{{ SourceDataSetId }}"
    - name: EndsAt
      value: "{{ EndsAt }}"
    - name: Description
      value: "{{ Description }}"
    - name: Tags
      value: "{{ Tags }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_data_grant"
    values={[
        { label: 'delete_data_grant', value: 'delete_data_grant' }
    ]}
>
<TabItem value="delete_data_grant">

This operation deletes a data grant.

```sql
DELETE FROM aws.dataexchange.data_grants
WHERE data_grant_id = '{{ data_grant_id }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="accept_data_grant"
    values={[
        { label: 'accept_data_grant', value: 'accept_data_grant' }
    ]}
>
<TabItem value="accept_data_grant">

This operation accepts a data grant.

```sql
EXEC aws.dataexchange.data_grants.accept_data_grant 
@data_grant_arn='{{ data_grant_arn }}' --required, 
@region='{{ region }}' --required
;
```
</TabItem>
</Tabs>
