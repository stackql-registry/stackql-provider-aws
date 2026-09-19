--- 
title: elasticsearch_service_software_updates
hide_title: false
hide_table_of_contents: false
keywords:
  - elasticsearch_service_software_updates
  - es
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

Creates, updates, deletes, gets or lists an <code>elasticsearch_service_software_updates</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="elasticsearch_service_software_updates" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.es.elasticsearch_service_software_updates" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

`SELECT` not supported for this resource, use `SHOW METHODS` to view available operations for the resource.


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
    <td><a href="#cancel_elasticsearch_service_software_update"><CopyableCode code="cancel_elasticsearch_service_software_update" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-DomainName"><code>DomainName</code></a></td>
    <td></td>
    <td>Cancels a scheduled service software update for an Amazon ES domain. You can only perform this operation before the AutomatedUpdateDate and when the UpdateStatus is in the PENDING_UPDATE state.</td>
</tr>
<tr>
    <td><a href="#start_elasticsearch_service_software_update"><CopyableCode code="start_elasticsearch_service_software_update" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-DomainName"><code>DomainName</code></a></td>
    <td></td>
    <td>Schedules a service software update for an Amazon ES domain.</td>
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

## Lifecycle Methods

<Tabs
    defaultValue="cancel_elasticsearch_service_software_update"
    values={[
        { label: 'cancel_elasticsearch_service_software_update', value: 'cancel_elasticsearch_service_software_update' },
        { label: 'start_elasticsearch_service_software_update', value: 'start_elasticsearch_service_software_update' }
    ]}
>
<TabItem value="cancel_elasticsearch_service_software_update">

Cancels a scheduled service software update for an Amazon ES domain. You can only perform this operation before the AutomatedUpdateDate and when the UpdateStatus is in the PENDING_UPDATE state.

```sql
EXEC aws.es.elasticsearch_service_software_updates.cancel_elasticsearch_service_software_update 
@region='{{ region }}' --required 
@@json=
'{
"DomainName": "{{ DomainName }}"
}'
;
```
</TabItem>
<TabItem value="start_elasticsearch_service_software_update">

Schedules a service software update for an Amazon ES domain.

```sql
EXEC aws.es.elasticsearch_service_software_updates.start_elasticsearch_service_software_update 
@region='{{ region }}' --required 
@@json=
'{
"DomainName": "{{ DomainName }}"
}'
;
```
</TabItem>
</Tabs>
