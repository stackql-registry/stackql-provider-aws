--- 
title: recommended_policy_v2s
hide_title: false
hide_table_of_contents: false
keywords:
  - recommended_policy_v2s
  - securityhub
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

Creates, updates, deletes, gets or lists a <code>recommended_policy_v2s</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="recommended_policy_v2s" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.securityhub.recommended_policy_v2s" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_recommended_policy_v2"
    values={[
        { label: 'get_recommended_policy_v2', value: 'get_recommended_policy_v2' }
    ]}
>
<TabItem value="get_recommended_policy_v2">

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
    <td><CopyableCode code="UnusedPermissions" /></td>
    <td><code>object</code></td>
    <td>A recommended step to remediate an unused permissions finding.</td>
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
    <td><a href="#get_recommended_policy_v2"><CopyableCode code="get_recommended_policy_v2" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-metadata_uid"><code>metadata_uid</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-NextToken"><code>NextToken</code></a>, <a href="#parameter-MaxResults"><code>MaxResults</code></a></td>
    <td>Retrieves the recommended policy to remediate a Security Hub finding. GetRecommendedPolicyV2 only supports findings for unused permissions.</td>
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
<tr id="parameter-metadata_uid">
    <td><CopyableCode code="metadata_uid" /></td>
    <td><code>string</code></td>
    <td>The unique identifier (ID) of Security Hub OCSF findings found under the metadata.uid field of the finding.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-MaxResults">
    <td><CopyableCode code="MaxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of recommendation steps to return.</td>
</tr>
<tr id="parameter-NextToken">
    <td><CopyableCode code="NextToken" /></td>
    <td><code>string</code></td>
    <td>The token used to paginate the RecommendationSteps list returned. On your first call to GetRecommendedPolicyV2, omit this parameter or set it to NULL. For subsequent calls, use the NextToken value returned in the previous response to retrieve the next page of results.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_recommended_policy_v2"
    values={[
        { label: 'get_recommended_policy_v2', value: 'get_recommended_policy_v2' }
    ]}
>
<TabItem value="get_recommended_policy_v2">

Retrieves the recommended policy to remediate a Security Hub finding. GetRecommendedPolicyV2 only supports findings for unused permissions.

```sql
SELECT
UnusedPermissions
FROM aws.securityhub.recommended_policy_v2s
WHERE metadata_uid = '{{ metadata_uid }}' -- required
AND region = '{{ region }}' -- required
AND NextToken = '{{ NextToken }}'
AND MaxResults = '{{ MaxResults }}'
;
```
</TabItem>
</Tabs>
