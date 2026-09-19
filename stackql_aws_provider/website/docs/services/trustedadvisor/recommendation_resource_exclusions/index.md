--- 
title: recommendation_resource_exclusions
hide_title: false
hide_table_of_contents: false
keywords:
  - recommendation_resource_exclusions
  - trustedadvisor
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

Creates, updates, deletes, gets or lists a <code>recommendation_resource_exclusions</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="recommendation_resource_exclusions" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.trustedadvisor.recommendation_resource_exclusions" /></td></tr>
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
    <td><a href="#batch_update_recommendation_resource_exclusion"><CopyableCode code="batch_update_recommendation_resource_exclusion" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-recommendationResourceExclusions"><code>recommendationResourceExclusions</code></a></td>
    <td></td>
    <td>Update one or more exclusion statuses for a list of recommendation resources. This API supports up to 25 unique recommendation resource ARNs per request. This API currently doesn't support prioritized recommendation resources. This API updates global recommendations, eliminating the need to call the API in each AWS Region. After submitting an exclusion update, note that it might take a few minutes for the changes to be reflected in the system.</td>
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
    defaultValue="batch_update_recommendation_resource_exclusion"
    values={[
        { label: 'batch_update_recommendation_resource_exclusion', value: 'batch_update_recommendation_resource_exclusion' }
    ]}
>
<TabItem value="batch_update_recommendation_resource_exclusion">

Update one or more exclusion statuses for a list of recommendation resources. This API supports up to 25 unique recommendation resource ARNs per request. This API currently doesn't support prioritized recommendation resources. This API updates global recommendations, eliminating the need to call the API in each AWS Region. After submitting an exclusion update, note that it might take a few minutes for the changes to be reflected in the system.

```sql
EXEC aws.trustedadvisor.recommendation_resource_exclusions.batch_update_recommendation_resource_exclusion 
@region='{{ region }}' --required 
@@json=
'{
"recommendationResourceExclusions": "{{ recommendationResourceExclusions }}"
}'
;
```
</TabItem>
</Tabs>
