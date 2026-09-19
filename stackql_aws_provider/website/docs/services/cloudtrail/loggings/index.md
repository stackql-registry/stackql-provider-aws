--- 
title: loggings
hide_title: false
hide_table_of_contents: false
keywords:
  - loggings
  - cloudtrail
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

Creates, updates, deletes, gets or lists a <code>loggings</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="loggings" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.cloudtrail.loggings" /></td></tr>
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
    <td><a href="#start_logging"><CopyableCode code="start_logging" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-Name"><code>Name</code></a></td>
    <td></td>
    <td>Starts the recording of Amazon Web Services API calls and log file delivery for a trail. For a trail that is enabled in all Regions, this operation must be called from the Region in which the trail was created. This operation cannot be called on the shadow trails (replicated trails in other Regions) of a trail that is enabled in all Regions.</td>
</tr>
<tr>
    <td><a href="#stop_logging"><CopyableCode code="stop_logging" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-Name"><code>Name</code></a></td>
    <td></td>
    <td>Suspends the recording of Amazon Web Services API calls and log file delivery for the specified trail. Under most circumstances, there is no need to use this action. You can update a trail without stopping it first. This action is the only way to stop recording. For a trail enabled in all Regions, this operation must be called from the Region in which the trail was created, or an InvalidHomeRegionException will occur. This operation cannot be called on the shadow trails (replicated trails in other Regions) of a trail enabled in all Regions.</td>
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
    defaultValue="start_logging"
    values={[
        { label: 'start_logging', value: 'start_logging' },
        { label: 'stop_logging', value: 'stop_logging' }
    ]}
>
<TabItem value="start_logging">

Starts the recording of Amazon Web Services API calls and log file delivery for a trail. For a trail that is enabled in all Regions, this operation must be called from the Region in which the trail was created. This operation cannot be called on the shadow trails (replicated trails in other Regions) of a trail that is enabled in all Regions.

```sql
EXEC aws.cloudtrail.loggings.start_logging 
@region='{{ region }}' --required 
@@json=
'{
"Name": "{{ Name }}"
}'
;
```
</TabItem>
<TabItem value="stop_logging">

Suspends the recording of Amazon Web Services API calls and log file delivery for the specified trail. Under most circumstances, there is no need to use this action. You can update a trail without stopping it first. This action is the only way to stop recording. For a trail enabled in all Regions, this operation must be called from the Region in which the trail was created, or an InvalidHomeRegionException will occur. This operation cannot be called on the shadow trails (replicated trails in other Regions) of a trail enabled in all Regions.

```sql
EXEC aws.cloudtrail.loggings.stop_logging 
@region='{{ region }}' --required 
@@json=
'{
"Name": "{{ Name }}"
}'
;
```
</TabItem>
</Tabs>
