--- 
title: recommendation_preferences
hide_title: false
hide_table_of_contents: false
keywords:
  - recommendation_preferences
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

Creates, updates, deletes, gets or lists a <code>recommendation_preferences</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="recommendation_preferences" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.compute_optimizer.recommendation_preferences" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_recommendation_preferences"
    values={[
        { label: 'get_recommendation_preferences', value: 'get_recommendation_preferences' }
    ]}
>
<TabItem value="get_recommendation_preferences">

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
    <td>The status of the enhanced infrastructure metrics recommendation preference. When the recommendations page is refreshed, a status of Active confirms that the preference is applied to the recommendations, and a status of Inactive confirms that the preference isn't yet applied to recommendations. For more information, see Enhanced infrastructure metrics in the Compute Optimizer User Guide. (Active, Inactive)</td>
</tr>
<tr>
    <td><CopyableCode code="external_metrics_preference" /></td>
    <td><code>object</code></td>
    <td>An object that describes the external metrics recommendation preference. If the preference is applied in the latest recommendation refresh, an object with a valid source value appears in the response. If the preference isn't applied to the recommendations already, then this object doesn't appear in the response.</td>
</tr>
<tr>
    <td><CopyableCode code="inferred_workload_types" /></td>
    <td><code>string</code></td>
    <td>The status of the inferred workload types recommendation preference. When the recommendations page is refreshed, a status of Active confirms that the preference is applied to the recommendations, and a status of Inactive confirms that the preference isn't yet applied to recommendations. (Active, Inactive)</td>
</tr>
<tr>
    <td><CopyableCode code="look_back_period" /></td>
    <td><code>string</code></td>
    <td>The preference to control the number of days the utilization metrics of the Amazon Web Services resource are analyzed. If the preference isn’t set, this object is null. (DAYS_14, DAYS_32, DAYS_93)</td>
</tr>
<tr>
    <td><CopyableCode code="preferred_resources" /></td>
    <td><code>array</code></td>
    <td>The preference to control which resource type values are considered when generating rightsizing recommendations. This object resolves any wildcard expressions and returns the effective list of candidate resource type values. If the preference isn’t set, this object is null.</td>
</tr>
<tr>
    <td><CopyableCode code="resource_type" /></td>
    <td><code>string</code></td>
    <td>The target resource type of the recommendation preference to create. The Ec2Instance option encompasses standalone instances and instances that are part of Auto Scaling groups. The AutoScalingGroup option encompasses only instances that are part of an Auto Scaling group. (Ec2Instance, AutoScalingGroup, EbsVolume, LambdaFunction, NotApplicable, EcsService, License, RdsDBInstance, AuroraDBClusterStorage, Idle)</td>
</tr>
<tr>
    <td><CopyableCode code="savings_estimation_mode" /></td>
    <td><code>string</code></td>
    <td>Describes the savings estimation mode used for calculating savings opportunity. Only the account manager or delegated administrator of your organization can activate this preference. (AfterDiscounts, BeforeDiscounts)</td>
</tr>
<tr>
    <td><CopyableCode code="scope" /></td>
    <td><code>object</code></td>
    <td>An object that describes the scope of the recommendation preference. Recommendation preferences can be created at the organization level (for management accounts of an organization only), account level, and resource level. For more information, see Activating enhanced infrastructure metrics in the Compute Optimizer User Guide.</td>
</tr>
<tr>
    <td><CopyableCode code="utilization_preferences" /></td>
    <td><code>array</code></td>
    <td>The preference to control the resource’s CPU utilization threshold, CPU utilization headroom, and memory utilization headroom. If the preference isn’t set, this object is null. This preference is only available for the Amazon EC2 instance resource type.</td>
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
    <td><a href="#get_recommendation_preferences"><CopyableCode code="get_recommendation_preferences" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns existing recommendation preferences, such as enhanced infrastructure metrics. Use the scope parameter to specify which preferences to return. You can specify to return preferences for an organization, a specific account ID, or a specific EC2 instance or Auto Scaling group Amazon Resource Name (ARN). For more information, see Activating enhanced infrastructure metrics in the Compute Optimizer User Guide.</td>
</tr>
<tr>
    <td><a href="#put_recommendation_preferences"><CopyableCode code="put_recommendation_preferences" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-resourceType"><code>resourceType</code></a></td>
    <td></td>
    <td>Creates a new recommendation preference or updates an existing recommendation preference, such as enhanced infrastructure metrics. For more information, see Activating enhanced infrastructure metrics in the Compute Optimizer User Guide.</td>
</tr>
<tr>
    <td><a href="#delete_recommendation_preferences"><CopyableCode code="delete_recommendation_preferences" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a recommendation preference, such as enhanced infrastructure metrics. For more information, see Activating enhanced infrastructure metrics in the Compute Optimizer User Guide.</td>
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
    defaultValue="get_recommendation_preferences"
    values={[
        { label: 'get_recommendation_preferences', value: 'get_recommendation_preferences' }
    ]}
>
<TabItem value="get_recommendation_preferences">

Returns existing recommendation preferences, such as enhanced infrastructure metrics. Use the scope parameter to specify which preferences to return. You can specify to return preferences for an organization, a specific account ID, or a specific EC2 instance or Auto Scaling group Amazon Resource Name (ARN). For more information, see Activating enhanced infrastructure metrics in the Compute Optimizer User Guide.

```sql
SELECT
enhanced_infrastructure_metrics,
external_metrics_preference,
inferred_workload_types,
look_back_period,
preferred_resources,
resource_type,
savings_estimation_mode,
scope,
utilization_preferences
FROM aws.compute_optimizer.recommendation_preferences
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `REPLACE` examples

<Tabs
    defaultValue="put_recommendation_preferences"
    values={[
        { label: 'put_recommendation_preferences', value: 'put_recommendation_preferences' }
    ]}
>
<TabItem value="put_recommendation_preferences">

Creates a new recommendation preference or updates an existing recommendation preference, such as enhanced infrastructure metrics. For more information, see Activating enhanced infrastructure metrics in the Compute Optimizer User Guide.

```sql
REPLACE aws.compute_optimizer.recommendation_preferences
SET 
resourceType = '{{ resourceType }}',
scope = '{{ scope }}',
enhancedInfrastructureMetrics = '{{ enhancedInfrastructureMetrics }}',
inferredWorkloadTypes = '{{ inferredWorkloadTypes }}',
externalMetricsPreference = '{{ externalMetricsPreference }}',
lookBackPeriod = '{{ lookBackPeriod }}',
utilizationPreferences = '{{ utilizationPreferences }}',
preferredResources = '{{ preferredResources }}',
savingsEstimationMode = '{{ savingsEstimationMode }}'
WHERE 
region = '{{ region }}' --required
AND resourceType = '{{ resourceType }}' --required;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_recommendation_preferences"
    values={[
        { label: 'delete_recommendation_preferences', value: 'delete_recommendation_preferences' }
    ]}
>
<TabItem value="delete_recommendation_preferences">

Deletes a recommendation preference, such as enhanced infrastructure metrics. For more information, see Activating enhanced infrastructure metrics in the Compute Optimizer User Guide.

```sql
DELETE FROM aws.compute_optimizer.recommendation_preferences
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
