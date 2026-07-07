--- 
title: continuous_deployment_policies
hide_title: false
hide_table_of_contents: false
keywords:
  - continuous_deployment_policies
  - cloudfront
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

Creates, updates, deletes, gets or lists a <code>continuous_deployment_policies</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="continuous_deployment_policies" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.cloudfront.continuous_deployment_policies" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_continuous_deployment_policy"
    values={[
        { label: 'get_continuous_deployment_policy', value: 'get_continuous_deployment_policy' },
        { label: 'list_continuous_deployment_policies', value: 'list_continuous_deployment_policies' }
    ]}
>
<TabItem value="get_continuous_deployment_policy">

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
    <td><CopyableCode code="ContinuousDeploymentPolicyConfig" /></td>
    <td><code>string</code></td>
    <td>Contains the configuration for a continuous deployment policy.</td>
</tr>
<tr>
    <td><CopyableCode code="Id" /></td>
    <td><code>string</code></td>
    <td>The identifier of the continuous deployment policy.</td>
</tr>
<tr>
    <td><CopyableCode code="LastModifiedTime" /></td>
    <td><code>string</code></td>
    <td>The date and time the continuous deployment policy was last modified.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_continuous_deployment_policies">

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
    <td><CopyableCode code="Items" /></td>
    <td><code>string</code></td>
    <td>A list of continuous deployment policy items.</td>
</tr>
<tr>
    <td><CopyableCode code="MaxItems" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of continuous deployment policies that were specified in your request.</td>
</tr>
<tr>
    <td><CopyableCode code="NextMarker" /></td>
    <td><code>string</code></td>
    <td>Indicates the next page of continuous deployment policies. To get the next page of the list, use this value in the Marker field of your request.</td>
</tr>
<tr>
    <td><CopyableCode code="Quantity" /></td>
    <td><code>integer</code></td>
    <td>The total number of continuous deployment policies in your Amazon Web Services account, regardless of the MaxItems value.</td>
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
    <td><a href="#get_continuous_deployment_policy"><CopyableCode code="get_continuous_deployment_policy" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets a continuous deployment policy, including metadata (the policy's identifier and the date and time when the policy was last modified).</td>
</tr>
<tr>
    <td><a href="#list_continuous_deployment_policies"><CopyableCode code="list_continuous_deployment_policies" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-Marker"><code>Marker</code></a>, <a href="#parameter-MaxItems"><code>MaxItems</code></a></td>
    <td>Gets a list of the continuous deployment policies in your Amazon Web Services account. You can optionally specify the maximum number of items to receive in the response. If the total number of items in the list exceeds the maximum that you specify, or the default maximum, the response is paginated. To get the next page of items, send a subsequent request that specifies the NextMarker value from the current response as the Marker value in the subsequent request.</td>
</tr>
<tr>
    <td><a href="#create_continuous_deployment_policy"><CopyableCode code="create_continuous_deployment_policy" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-ContinuousDeploymentPolicyConfig"><code>ContinuousDeploymentPolicyConfig</code></a></td>
    <td></td>
    <td>Creates a continuous deployment policy that distributes traffic for a custom domain name to two different CloudFront distributions. To use a continuous deployment policy, first use CopyDistribution to create a staging distribution, then use UpdateDistribution to modify the staging distribution's configuration. After you create and update a staging distribution, you can use a continuous deployment policy to incrementally move traffic to the staging distribution. This workflow enables you to test changes to a distribution's configuration before moving all of your domain's production traffic to the new configuration.</td>
</tr>
<tr>
    <td><a href="#update_continuous_deployment_policy"><CopyableCode code="update_continuous_deployment_policy" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-ContinuousDeploymentPolicyConfig"><code>ContinuousDeploymentPolicyConfig</code></a></td>
    <td><a href="#parameter-If-Match"><code>If-Match</code></a></td>
    <td>Updates a continuous deployment policy. You can update a continuous deployment policy to enable or disable it, to change the percentage of traffic that it sends to the staging distribution, or to change the staging distribution that it sends traffic to. When you update a continuous deployment policy configuration, all the fields are updated with the values that are provided in the request. You cannot update some fields independent of others. To update a continuous deployment policy configuration: Use GetContinuousDeploymentPolicyConfig to get the current configuration. Locally modify the fields in the continuous deployment policy configuration that you want to update. Use UpdateContinuousDeploymentPolicy, providing the entire continuous deployment policy configuration, including the fields that you modified and those that you didn't.</td>
</tr>
<tr>
    <td><a href="#delete_continuous_deployment_policy"><CopyableCode code="delete_continuous_deployment_policy" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-If-Match"><code>If-Match</code></a></td>
    <td>Deletes a continuous deployment policy. You cannot delete a continuous deployment policy that's attached to a primary distribution. First update your distribution to remove the continuous deployment policy, then you can delete the policy.</td>
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
<tr id="parameter-id">
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>The identifier of the continuous deployment policy that you are deleting.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-If-Match">
    <td><CopyableCode code="If-Match" /></td>
    <td><code>string</code></td>
    <td>The current version (ETag value) of the continuous deployment policy that you are deleting.</td>
</tr>
<tr id="parameter-Marker">
    <td><CopyableCode code="Marker" /></td>
    <td><code>string</code></td>
    <td>Use this field when paginating results to indicate where to begin in your list of continuous deployment policies. The response includes policies in the list that occur after the marker. To get the next page of the list, set this field's value to the value of NextMarker from the current page's response.</td>
</tr>
<tr id="parameter-MaxItems">
    <td><CopyableCode code="MaxItems" /></td>
    <td><code>string</code></td>
    <td>The maximum number of continuous deployment policies that you want returned in the response.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_continuous_deployment_policy"
    values={[
        { label: 'get_continuous_deployment_policy', value: 'get_continuous_deployment_policy' },
        { label: 'list_continuous_deployment_policies', value: 'list_continuous_deployment_policies' }
    ]}
>
<TabItem value="get_continuous_deployment_policy">

Gets a continuous deployment policy, including metadata (the policy's identifier and the date and time when the policy was last modified).

```sql
SELECT
ContinuousDeploymentPolicyConfig,
Id,
LastModifiedTime
FROM aws.cloudfront.continuous_deployment_policies
WHERE id = '{{ id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_continuous_deployment_policies">

Gets a list of the continuous deployment policies in your Amazon Web Services account. You can optionally specify the maximum number of items to receive in the response. If the total number of items in the list exceeds the maximum that you specify, or the default maximum, the response is paginated. To get the next page of items, send a subsequent request that specifies the NextMarker value from the current response as the Marker value in the subsequent request.

```sql
SELECT
Items,
MaxItems,
NextMarker,
Quantity
FROM aws.cloudfront.continuous_deployment_policies
WHERE region = '{{ region }}' -- required
AND Marker = '{{ Marker }}'
AND MaxItems = '{{ MaxItems }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_continuous_deployment_policy"
    values={[
        { label: 'create_continuous_deployment_policy', value: 'create_continuous_deployment_policy' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_continuous_deployment_policy">

Creates a continuous deployment policy that distributes traffic for a custom domain name to two different CloudFront distributions. To use a continuous deployment policy, first use CopyDistribution to create a staging distribution, then use UpdateDistribution to modify the staging distribution's configuration. After you create and update a staging distribution, you can use a continuous deployment policy to incrementally move traffic to the staging distribution. This workflow enables you to test changes to a distribution's configuration before moving all of your domain's production traffic to the new configuration.

```sql
INSERT INTO aws.cloudfront.continuous_deployment_policies (
ContinuousDeploymentPolicyConfig,
region
)
SELECT 
'{{ ContinuousDeploymentPolicyConfig }}' /* required */,
'{{ region }}'
RETURNING
ContinuousDeploymentPolicyConfig,
Id,
LastModifiedTime
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: continuous_deployment_policies
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the continuous_deployment_policies resource.
    - name: ContinuousDeploymentPolicyConfig
      description: |
        Contains the configuration for a continuous deployment policy.
      value:
        StagingDistributionDnsNames:
          Quantity: {{ Quantity }}
          Items:
            - "{{ Items }}"
        Enabled: {{ Enabled }}
        TrafficConfig:
          SingleWeightConfig:
            Weight: {{ Weight }}
            SessionStickinessConfig:
              IdleTTL: {{ IdleTTL }}
              MaximumTTL: {{ MaximumTTL }}
          SingleHeaderConfig:
            Header: "{{ Header }}"
            Value: "{{ Value }}"
          Type: "{{ Type }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_continuous_deployment_policy"
    values={[
        { label: 'update_continuous_deployment_policy', value: 'update_continuous_deployment_policy' }
    ]}
>
<TabItem value="update_continuous_deployment_policy">

Updates a continuous deployment policy. You can update a continuous deployment policy to enable or disable it, to change the percentage of traffic that it sends to the staging distribution, or to change the staging distribution that it sends traffic to. When you update a continuous deployment policy configuration, all the fields are updated with the values that are provided in the request. You cannot update some fields independent of others. To update a continuous deployment policy configuration: Use GetContinuousDeploymentPolicyConfig to get the current configuration. Locally modify the fields in the continuous deployment policy configuration that you want to update. Use UpdateContinuousDeploymentPolicy, providing the entire continuous deployment policy configuration, including the fields that you modified and those that you didn't.

```sql
UPDATE aws.cloudfront.continuous_deployment_policies
SET 
ContinuousDeploymentPolicyConfig = '{{ ContinuousDeploymentPolicyConfig }}'
WHERE 
id = '{{ id }}' --required
AND region = '{{ region }}' --required
AND ContinuousDeploymentPolicyConfig = '{{ ContinuousDeploymentPolicyConfig }}' --required
AND `If-Match` = '{{ If-Match}}'
RETURNING
ContinuousDeploymentPolicyConfig,
Id,
LastModifiedTime;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_continuous_deployment_policy"
    values={[
        { label: 'delete_continuous_deployment_policy', value: 'delete_continuous_deployment_policy' }
    ]}
>
<TabItem value="delete_continuous_deployment_policy">

Deletes a continuous deployment policy. You cannot delete a continuous deployment policy that's attached to a primary distribution. First update your distribution to remove the continuous deployment policy, then you can delete the policy.

```sql
DELETE FROM aws.cloudfront.continuous_deployment_policies
WHERE id = '{{ id }}' --required
AND region = '{{ region }}' --required
AND `If-Match` = '{{ If-Match }}'
;
```
</TabItem>
</Tabs>
