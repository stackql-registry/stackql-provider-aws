--- 
title: discoverers
hide_title: false
hide_table_of_contents: false
keywords:
  - discoverers
  - schemas
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

Creates, updates, deletes, gets or lists a <code>discoverers</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="discoverers" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.schemas.discoverers" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_discoverer"
    values={[
        { label: 'describe_discoverer', value: 'describe_discoverer' },
        { label: 'list_discoverers', value: 'list_discoverers' }
    ]}
>
<TabItem value="describe_discoverer">

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
    <td><CopyableCode code="cross_account" /></td>
    <td><code>boolean</code></td>
    <td>The Status if the discoverer will discover schemas from events sent from another account.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The description of the discoverer.</td>
</tr>
<tr>
    <td><CopyableCode code="discoverer_arn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the discoverer.</td>
</tr>
<tr>
    <td><CopyableCode code="discoverer_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the discoverer.</td>
</tr>
<tr>
    <td><CopyableCode code="source_arn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the event bus.</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>The state of the discoverer. (STARTED, STOPPED)</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>object</code></td>
    <td>Tags associated with the resource.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_discoverers">

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
    <td><CopyableCode code="cross_account" /></td>
    <td><code>boolean</code></td>
    <td>The Status if the discoverer will discover schemas from events sent from another account.</td>
</tr>
<tr>
    <td><CopyableCode code="discoverer_arn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the discoverer.</td>
</tr>
<tr>
    <td><CopyableCode code="discoverer_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the discoverer.</td>
</tr>
<tr>
    <td><CopyableCode code="source_arn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the event bus.</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>The state of the discoverer. (STARTED, STOPPED)</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>object</code></td>
    <td>Tags associated with the resource.</td>
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
    <td><a href="#describe_discoverer"><CopyableCode code="describe_discoverer" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-discoverer_id"><code>discoverer_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Describes the discoverer.</td>
</tr>
<tr>
    <td><a href="#list_discoverers"><CopyableCode code="list_discoverers" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-discovererIdPrefix"><code>discovererIdPrefix</code></a>, <a href="#parameter-limit"><code>limit</code></a>, <a href="#parameter-nextToken"><code>nextToken</code></a>, <a href="#parameter-sourceArnPrefix"><code>sourceArnPrefix</code></a></td>
    <td>List the discoverers.</td>
</tr>
<tr>
    <td><a href="#create_discoverer"><CopyableCode code="create_discoverer" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-SourceArn"><code>SourceArn</code></a></td>
    <td></td>
    <td>Creates a discoverer.</td>
</tr>
<tr>
    <td><a href="#update_discoverer"><CopyableCode code="update_discoverer" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-discoverer_id"><code>discoverer_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Updates the discoverer</td>
</tr>
<tr>
    <td><a href="#delete_discoverer"><CopyableCode code="delete_discoverer" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-discoverer_id"><code>discoverer_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a discoverer.</td>
</tr>
<tr>
    <td><a href="#start_discoverer"><CopyableCode code="start_discoverer" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-discoverer_id"><code>discoverer_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Starts the discoverer</td>
</tr>
<tr>
    <td><a href="#stop_discoverer"><CopyableCode code="stop_discoverer" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-discoverer_id"><code>discoverer_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Stops the discoverer</td>
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
<tr id="parameter-discoverer_id">
    <td><CopyableCode code="discoverer_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the discoverer.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-discovererIdPrefix">
    <td><CopyableCode code="discovererIdPrefix" /></td>
    <td><code>string</code></td>
    <td>Specifying this limits the results to only those discoverer IDs that start with the specified prefix.</td>
</tr>
<tr id="parameter-limit">
    <td><CopyableCode code="limit" /></td>
    <td><code>integer</code></td>
    <td></td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>The token that specifies the next page of results to return. To request the first page, leave NextToken empty. The token will expire in 24 hours, and cannot be shared with other accounts.</td>
</tr>
<tr id="parameter-sourceArnPrefix">
    <td><CopyableCode code="sourceArnPrefix" /></td>
    <td><code>string</code></td>
    <td>Specifying this limits the results to only those ARNs that start with the specified prefix.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_discoverer"
    values={[
        { label: 'describe_discoverer', value: 'describe_discoverer' },
        { label: 'list_discoverers', value: 'list_discoverers' }
    ]}
>
<TabItem value="describe_discoverer">

Describes the discoverer.

```sql
SELECT
cross_account,
description,
discoverer_arn,
discoverer_id,
source_arn,
state,
tags
FROM aws.schemas.discoverers
WHERE discoverer_id = '{{ discoverer_id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_discoverers">

List the discoverers.

```sql
SELECT
cross_account,
discoverer_arn,
discoverer_id,
source_arn,
state,
tags
FROM aws.schemas.discoverers
WHERE region = '{{ region }}' -- required
AND discovererIdPrefix = '{{ discovererIdPrefix }}'
AND limit = '{{ limit }}'
AND nextToken = '{{ nextToken }}'
AND sourceArnPrefix = '{{ sourceArnPrefix }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_discoverer"
    values={[
        { label: 'create_discoverer', value: 'create_discoverer' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_discoverer">

Creates a discoverer.

```sql
INSERT INTO aws.schemas.discoverers (
Description,
SourceArn,
CrossAccount,
Tags,
region
)
SELECT 
'{{ Description }}',
'{{ SourceArn }}' /* required */,
{{ CrossAccount }},
'{{ Tags }}',
'{{ region }}'
RETURNING
cross_account,
description,
discoverer_arn,
discoverer_id,
source_arn,
state,
tags
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: discoverers
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the discoverers resource.
    - name: Description
      value: "{{ Description }}"
    - name: SourceArn
      value: "{{ SourceArn }}"
    - name: CrossAccount
      value: {{ CrossAccount }}
    - name: Tags
      value: "{{ Tags }}"
      description: |
        Key-value pairs associated with a resource.
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_discoverer"
    values={[
        { label: 'update_discoverer', value: 'update_discoverer' }
    ]}
>
<TabItem value="update_discoverer">

Updates the discoverer

```sql
UPDATE aws.schemas.discoverers
SET 
Description = '{{ Description }}',
CrossAccount = {{ CrossAccount }}
WHERE 
discoverer_id = '{{ discoverer_id }}' --required
AND region = '{{ region }}' --required
RETURNING
cross_account,
description,
discoverer_arn,
discoverer_id,
source_arn,
state,
tags;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_discoverer"
    values={[
        { label: 'delete_discoverer', value: 'delete_discoverer' }
    ]}
>
<TabItem value="delete_discoverer">

Deletes a discoverer.

```sql
DELETE FROM aws.schemas.discoverers
WHERE discoverer_id = '{{ discoverer_id }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="start_discoverer"
    values={[
        { label: 'start_discoverer', value: 'start_discoverer' },
        { label: 'stop_discoverer', value: 'stop_discoverer' }
    ]}
>
<TabItem value="start_discoverer">

Starts the discoverer

```sql
EXEC aws.schemas.discoverers.start_discoverer 
@discoverer_id='{{ discoverer_id }}' --required, 
@region='{{ region }}' --required
;
```
</TabItem>
<TabItem value="stop_discoverer">

Stops the discoverer

```sql
EXEC aws.schemas.discoverers.stop_discoverer 
@discoverer_id='{{ discoverer_id }}' --required, 
@region='{{ region }}' --required
;
```
</TabItem>
</Tabs>
