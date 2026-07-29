--- 
title: fraudsters
hide_title: false
hide_table_of_contents: false
keywords:
  - fraudsters
  - voice_id
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

Creates, updates, deletes, gets or lists a <code>fraudsters</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="fraudsters" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.voice_id.fraudsters" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_fraudster"
    values={[
        { label: 'describe_fraudster', value: 'describe_fraudster' },
        { label: 'list_fraudsters', value: 'list_fraudsters' }
    ]}
>
<TabItem value="describe_fraudster">

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
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp of when Voice ID identified the fraudster.</td>
</tr>
<tr>
    <td><CopyableCode code="domain_id" /></td>
    <td><code>string</code></td>
    <td>The identifier of the domain that contains the fraudster. (pattern: &lt;code&gt;^&#91;a-zA-Z0-9&#93;&#123;22&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="generated_fraudster_id" /></td>
    <td><code>string</code></td>
    <td>The service-generated identifier for the fraudster. (pattern: &lt;code&gt;^id#&#91;a-zA-Z0-9&#93;&#123;22&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="watchlist_ids" /></td>
    <td><code>array</code></td>
    <td>The identifier of the watchlists the fraudster is a part of.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_fraudsters">

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
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp of when the fraudster summary was created.</td>
</tr>
<tr>
    <td><CopyableCode code="domain_id" /></td>
    <td><code>string</code></td>
    <td>The identifier of the domain that contains the fraudster summary. (pattern: &lt;code&gt;^&#91;a-zA-Z0-9&#93;&#123;22&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="generated_fraudster_id" /></td>
    <td><code>string</code></td>
    <td>The service-generated identifier for the fraudster. (pattern: &lt;code&gt;^id#&#91;a-zA-Z0-9&#93;&#123;22&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="watchlist_ids" /></td>
    <td><code>array</code></td>
    <td>The identifier of the watchlists the fraudster is a part of.</td>
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
    <td><a href="#describe_fraudster"><CopyableCode code="describe_fraudster" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Describes the specified fraudster.</td>
</tr>
<tr>
    <td><a href="#list_fraudsters"><CopyableCode code="list_fraudsters" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Lists all fraudsters in a specified watchlist or domain.</td>
</tr>
<tr>
    <td><a href="#associate_fraudster"><CopyableCode code="associate_fraudster" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-DomainId"><code>DomainId</code></a>, <a href="#parameter-FraudsterId"><code>FraudsterId</code></a>, <a href="#parameter-WatchlistId"><code>WatchlistId</code></a></td>
    <td></td>
    <td>Associates the fraudsters with the watchlist specified in the same domain.</td>
</tr>
<tr>
    <td><a href="#delete_fraudster"><CopyableCode code="delete_fraudster" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes the specified fraudster from Voice ID. This action disassociates the fraudster from any watchlists it is a part of.</td>
</tr>
<tr>
    <td><a href="#disassociate_fraudster"><CopyableCode code="disassociate_fraudster" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-DomainId"><code>DomainId</code></a>, <a href="#parameter-FraudsterId"><code>FraudsterId</code></a>, <a href="#parameter-WatchlistId"><code>WatchlistId</code></a></td>
    <td></td>
    <td>Disassociates the fraudsters from the watchlist specified. Voice ID always expects a fraudster to be a part of at least one watchlist. If you try to disassociate a fraudster from its only watchlist, a ValidationException is thrown.</td>
</tr>
<tr>
    <td><a href="#start_fraudster_registration_job"><CopyableCode code="start_fraudster_registration_job" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-DataAccessRoleArn"><code>DataAccessRoleArn</code></a>, <a href="#parameter-DomainId"><code>DomainId</code></a>, <a href="#parameter-InputDataConfig"><code>InputDataConfig</code></a>, <a href="#parameter-OutputDataConfig"><code>OutputDataConfig</code></a></td>
    <td></td>
    <td>Starts a new batch fraudster registration job using provided details.</td>
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
    defaultValue="describe_fraudster"
    values={[
        { label: 'describe_fraudster', value: 'describe_fraudster' },
        { label: 'list_fraudsters', value: 'list_fraudsters' }
    ]}
>
<TabItem value="describe_fraudster">

Describes the specified fraudster.

```sql
SELECT
created_at,
domain_id,
generated_fraudster_id,
watchlist_ids
FROM aws.voice_id.fraudsters
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_fraudsters">

Lists all fraudsters in a specified watchlist or domain.

```sql
SELECT
created_at,
domain_id,
generated_fraudster_id,
watchlist_ids
FROM aws.voice_id.fraudsters
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="associate_fraudster"
    values={[
        { label: 'associate_fraudster', value: 'associate_fraudster' }
    ]}
>
<TabItem value="associate_fraudster">

Associates the fraudsters with the watchlist specified in the same domain.

```sql
UPDATE aws.voice_id.fraudsters
SET 
DomainId = '{{ DomainId }}',
FraudsterId = '{{ FraudsterId }}',
WatchlistId = '{{ WatchlistId }}'
WHERE 
region = '{{ region }}' --required
AND DomainId = '{{ DomainId }}' --required
AND FraudsterId = '{{ FraudsterId }}' --required
AND WatchlistId = '{{ WatchlistId }}' --required
RETURNING
fraudster;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_fraudster"
    values={[
        { label: 'delete_fraudster', value: 'delete_fraudster' }
    ]}
>
<TabItem value="delete_fraudster">

Deletes the specified fraudster from Voice ID. This action disassociates the fraudster from any watchlists it is a part of.

```sql
DELETE FROM aws.voice_id.fraudsters
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="disassociate_fraudster"
    values={[
        { label: 'disassociate_fraudster', value: 'disassociate_fraudster' },
        { label: 'start_fraudster_registration_job', value: 'start_fraudster_registration_job' }
    ]}
>
<TabItem value="disassociate_fraudster">

Disassociates the fraudsters from the watchlist specified. Voice ID always expects a fraudster to be a part of at least one watchlist. If you try to disassociate a fraudster from its only watchlist, a ValidationException is thrown.

```sql
EXEC aws.voice_id.fraudsters.disassociate_fraudster 
@region='{{ region }}' --required 
@@json=
'{
"DomainId": "{{ DomainId }}", 
"FraudsterId": "{{ FraudsterId }}", 
"WatchlistId": "{{ WatchlistId }}"
}'
;
```
</TabItem>
<TabItem value="start_fraudster_registration_job">

Starts a new batch fraudster registration job using provided details.

```sql
EXEC aws.voice_id.fraudsters.start_fraudster_registration_job 
@region='{{ region }}' --required 
@@json=
'{
"ClientToken": "{{ ClientToken }}", 
"DataAccessRoleArn": "{{ DataAccessRoleArn }}", 
"DomainId": "{{ DomainId }}", 
"InputDataConfig": "{{ InputDataConfig }}", 
"JobName": "{{ JobName }}", 
"OutputDataConfig": "{{ OutputDataConfig }}", 
"RegistrationConfig": "{{ RegistrationConfig }}"
}'
;
```
</TabItem>
</Tabs>
