--- 
title: effective_recommendation_preferences
hide_title: false
hide_table_of_contents: false
keywords:
  - effective_recommendation_preferences
  - compute_optimizer
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

Creates, updates, deletes, gets or lists an <code>effective_recommendation_preferences</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="effective_recommendation_preferences" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.compute_optimizer.effective_recommendation_preferences" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_effective_recommendation_preferences"
    values={[
        { label: 'get_effective_recommendation_preferences', value: 'get_effective_recommendation_preferences' }
    ]}
>
<TabItem value="get_effective_recommendation_preferences">

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
    <td><CopyableCode code="enhanced_infrastructure_metrics" /></td>
    <td><code>string</code></td>
    <td>The status of the enhanced infrastructure metrics recommendation preference. Considers all applicable preferences that you might have set at the resource, account, and organization level. A status of Active confirms that the preference is applied in the latest recommendation refresh, and a status of Inactive confirms that it's not yet applied to recommendations. To validate whether the preference is applied to your last generated set of recommendations, review the effectiveRecommendationPreferences value in the response of the GetAutoScalingGroupRecommendations and GetEC2InstanceRecommendations actions. For more information, see Enhanced infrastructure metrics in the Compute Optimizer User Guide. (Active, Inactive)</td>
</tr>
<tr>
    <td><CopyableCode code="external_metrics_preference" /></td>
    <td><code>object</code></td>
    <td>The provider of the external metrics recommendation preference. Considers all applicable preferences that you might have set at the account and organization level. If the preference is applied in the latest recommendation refresh, an object with a valid source value appears in the response. If the preference isn't applied to the recommendations already, then this object doesn't appear in the response. To validate whether the preference is applied to your last generated set of recommendations, review the effectiveRecommendationPreferences value in the response of the GetEC2InstanceRecommendations actions. For more information, see Enhanced infrastructure metrics in the Compute Optimizer User Guide.</td>
</tr>
<tr>
    <td><CopyableCode code="look_back_period" /></td>
    <td><code>string</code></td>
    <td>The number of days the utilization metrics of the Amazon Web Services resource are analyzed. To validate that the preference is applied to your last generated set of recommendations, review the effectiveRecommendationPreferences value in the response of the GetAutoScalingGroupRecommendations, GetEC2InstanceRecommendations, GetEBSVolumeRecommendations, GetECSServiceRecommendations, or GetRDSDatabaseRecommendations actions. (DAYS_14, DAYS_32, DAYS_93)</td>
</tr>
<tr>
    <td><CopyableCode code="preferred_resources" /></td>
    <td><code>array</code></td>
    <td>The resource type values that are considered as candidates when generating rightsizing recommendations. This object resolves any wildcard expressions and returns the effective list of candidate resource type values. It also considers all applicable preferences that you set at the resource, account, and organization level. To validate that the preference is applied to your last generated set of recommendations, review the effectiveRecommendationPreferences value in the response of the GetAutoScalingGroupRecommendations or GetEC2InstanceRecommendations actions.</td>
</tr>
<tr>
    <td><CopyableCode code="utilization_preferences" /></td>
    <td><code>array</code></td>
    <td>The resource’s CPU and memory utilization preferences, such as threshold and headroom, that were used to generate rightsizing recommendations. It considers all applicable preferences that you set at the resource, account, and organization level. To validate that the preference is applied to your last generated set of recommendations, review the effectiveRecommendationPreferences value in the response of the GetAutoScalingGroupRecommendations or GetEC2InstanceRecommendations actions.</td>
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
    <td><a href="#get_effective_recommendation_preferences"><CopyableCode code="get_effective_recommendation_preferences" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns the recommendation preferences that are in effect for a given resource, such as enhanced infrastructure metrics. Considers all applicable preferences that you might have set at the resource, account, and organization level. When you create a recommendation preference, you can set its status to Active or Inactive. Use this action to view the recommendation preferences that are in effect, or Active.</td>
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
    defaultValue="get_effective_recommendation_preferences"
    values={[
        { label: 'get_effective_recommendation_preferences', value: 'get_effective_recommendation_preferences' }
    ]}
>
<TabItem value="get_effective_recommendation_preferences">

Returns the recommendation preferences that are in effect for a given resource, such as enhanced infrastructure metrics. Considers all applicable preferences that you might have set at the resource, account, and organization level. When you create a recommendation preference, you can set its status to Active or Inactive. Use this action to view the recommendation preferences that are in effect, or Active.

```sql
SELECT
enhanced_infrastructure_metrics,
external_metrics_preference,
look_back_period,
preferred_resources,
utilization_preferences
FROM aws.compute_optimizer.effective_recommendation_preferences
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
