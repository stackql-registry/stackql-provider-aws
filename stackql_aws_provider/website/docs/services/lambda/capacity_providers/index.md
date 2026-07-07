--- 
title: capacity_providers
hide_title: false
hide_table_of_contents: false
keywords:
  - capacity_providers
  - lambda
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

Creates, updates, deletes, gets or lists a <code>capacity_providers</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="capacity_providers" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.lambda.capacity_providers" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_capacity_provider"
    values={[
        { label: 'get_capacity_provider', value: 'get_capacity_provider' },
        { label: 'list_capacity_providers', value: 'list_capacity_providers' }
    ]}
>
<TabItem value="get_capacity_provider">

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
    <td><CopyableCode code="CapacityProviderArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the capacity provider. (pattern: &lt;code&gt;arn:aws&#91;a-zA-Z-&#93;*:lambda:&#91;a-z&#93;&#123;2&#125;((-gov)|(-iso(&#91;a-z&#93;?)))?-&#91;a-z&#93;+-\d&#123;1&#125;:\d&#123;12&#125;:capacity-provider:&#91;a-zA-Z0-9-_&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="CapacityProviderScalingConfig" /></td>
    <td><code>object</code></td>
    <td>Configuration that defines how the capacity provider scales compute instances based on demand and policies.</td>
</tr>
<tr>
    <td><CopyableCode code="InstanceRequirements" /></td>
    <td><code>object</code></td>
    <td>Specifications that define the characteristics and constraints for compute instances used by the capacity provider.</td>
</tr>
<tr>
    <td><CopyableCode code="KmsKeyArn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the KMS key used to encrypt the capacity provider's resources. (pattern: &lt;code&gt;(arn:(aws&#91;a-zA-Z-&#93;*)?:&#91;a-z0-9-.&#93;+:.*)|()&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="LastModified" /></td>
    <td><code>string</code></td>
    <td>The date and time when the capacity provider was last modified.</td>
</tr>
<tr>
    <td><CopyableCode code="PermissionsConfig" /></td>
    <td><code>object</code></td>
    <td>Configuration that specifies the permissions required for the capacity provider to manage compute resources.</td>
</tr>
<tr>
    <td><CopyableCode code="State" /></td>
    <td><code>string</code></td>
    <td>The current state of the capacity provider. (Pending, Active, Failed, Deleting)</td>
</tr>
<tr>
    <td><CopyableCode code="VpcConfig" /></td>
    <td><code>object</code></td>
    <td>VPC configuration that specifies the network settings for compute instances managed by the capacity provider.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_capacity_providers">

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
    <td><CopyableCode code="CapacityProviderArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the capacity provider. (pattern: &lt;code&gt;arn:aws&#91;a-zA-Z-&#93;*:lambda:&#91;a-z&#93;&#123;2&#125;((-gov)|(-iso(&#91;a-z&#93;?)))?-&#91;a-z&#93;+-\d&#123;1&#125;:\d&#123;12&#125;:capacity-provider:&#91;a-zA-Z0-9-_&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="CapacityProviderScalingConfig" /></td>
    <td><code>object</code></td>
    <td>Configuration that defines how the capacity provider scales compute instances based on demand and policies.</td>
</tr>
<tr>
    <td><CopyableCode code="InstanceRequirements" /></td>
    <td><code>object</code></td>
    <td>Specifications that define the characteristics and constraints for compute instances used by the capacity provider.</td>
</tr>
<tr>
    <td><CopyableCode code="KmsKeyArn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the KMS key used to encrypt the capacity provider's resources. (pattern: &lt;code&gt;(arn:(aws&#91;a-zA-Z-&#93;*)?:&#91;a-z0-9-.&#93;+:.*)|()&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="LastModified" /></td>
    <td><code>string</code></td>
    <td>The date and time when the capacity provider was last modified.</td>
</tr>
<tr>
    <td><CopyableCode code="PermissionsConfig" /></td>
    <td><code>object</code></td>
    <td>Configuration that specifies the permissions required for the capacity provider to manage compute resources.</td>
</tr>
<tr>
    <td><CopyableCode code="State" /></td>
    <td><code>string</code></td>
    <td>The current state of the capacity provider. (Pending, Active, Failed, Deleting)</td>
</tr>
<tr>
    <td><CopyableCode code="VpcConfig" /></td>
    <td><code>object</code></td>
    <td>VPC configuration that specifies the network settings for compute instances managed by the capacity provider.</td>
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
    <td><a href="#get_capacity_provider"><CopyableCode code="get_capacity_provider" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-capacity_provider_name"><code>capacity_provider_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves information about a specific capacity provider, including its configuration, state, and associated resources.</td>
</tr>
<tr>
    <td><a href="#list_capacity_providers"><CopyableCode code="list_capacity_providers" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-State"><code>State</code></a>, <a href="#parameter-Marker"><code>Marker</code></a>, <a href="#parameter-MaxItems"><code>MaxItems</code></a></td>
    <td>Returns a list of capacity providers in your account.</td>
</tr>
<tr>
    <td><a href="#create_capacity_provider"><CopyableCode code="create_capacity_provider" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-CapacityProviderName"><code>CapacityProviderName</code></a>, <a href="#parameter-VpcConfig"><code>VpcConfig</code></a>, <a href="#parameter-PermissionsConfig"><code>PermissionsConfig</code></a></td>
    <td></td>
    <td>Creates a capacity provider that manages compute resources for Lambda functions</td>
</tr>
<tr>
    <td><a href="#update_capacity_provider"><CopyableCode code="update_capacity_provider" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-capacity_provider_name"><code>capacity_provider_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Updates the configuration of an existing capacity provider.</td>
</tr>
<tr>
    <td><a href="#delete_capacity_provider"><CopyableCode code="delete_capacity_provider" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-capacity_provider_name"><code>capacity_provider_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a capacity provider. You cannot delete a capacity provider that is currently being used by Lambda functions.</td>
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
<tr id="parameter-capacity_provider_name">
    <td><CopyableCode code="capacity_provider_name" /></td>
    <td><code>string</code></td>
    <td>The name of the capacity provider to delete.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-Marker">
    <td><CopyableCode code="Marker" /></td>
    <td><code>string</code></td>
    <td>Specify the pagination token that's returned by a previous request to retrieve the next page of results.</td>
</tr>
<tr id="parameter-MaxItems">
    <td><CopyableCode code="MaxItems" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of capacity providers to return.</td>
</tr>
<tr id="parameter-State">
    <td><CopyableCode code="State" /></td>
    <td><code>string</code></td>
    <td>Filter capacity providers by their current state.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_capacity_provider"
    values={[
        { label: 'get_capacity_provider', value: 'get_capacity_provider' },
        { label: 'list_capacity_providers', value: 'list_capacity_providers' }
    ]}
>
<TabItem value="get_capacity_provider">

Retrieves information about a specific capacity provider, including its configuration, state, and associated resources.

```sql
SELECT
CapacityProviderArn,
CapacityProviderScalingConfig,
InstanceRequirements,
KmsKeyArn,
LastModified,
PermissionsConfig,
State,
VpcConfig
FROM aws.lambda.capacity_providers
WHERE capacity_provider_name = '{{ capacity_provider_name }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_capacity_providers">

Returns a list of capacity providers in your account.

```sql
SELECT
CapacityProviderArn,
CapacityProviderScalingConfig,
InstanceRequirements,
KmsKeyArn,
LastModified,
PermissionsConfig,
State,
VpcConfig
FROM aws.lambda.capacity_providers
WHERE region = '{{ region }}' -- required
AND State = '{{ State }}'
AND Marker = '{{ Marker }}'
AND MaxItems = '{{ MaxItems }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_capacity_provider"
    values={[
        { label: 'create_capacity_provider', value: 'create_capacity_provider' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_capacity_provider">

Creates a capacity provider that manages compute resources for Lambda functions

```sql
INSERT INTO aws.lambda.capacity_providers (
CapacityProviderName,
VpcConfig,
PermissionsConfig,
InstanceRequirements,
CapacityProviderScalingConfig,
KmsKeyArn,
Tags,
region
)
SELECT 
'{{ CapacityProviderName }}' /* required */,
'{{ VpcConfig }}' /* required */,
'{{ PermissionsConfig }}' /* required */,
'{{ InstanceRequirements }}',
'{{ CapacityProviderScalingConfig }}',
'{{ KmsKeyArn }}',
'{{ Tags }}',
'{{ region }}'
RETURNING
CapacityProvider
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: capacity_providers
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the capacity_providers resource.
    - name: CapacityProviderName
      value: "{{ CapacityProviderName }}"
    - name: VpcConfig
      description: |
        VPC configuration that specifies the network settings for compute instances managed by the capacity provider.
      value:
        SubnetIds:
          - "{{ SubnetIds }}"
        SecurityGroupIds:
          - "{{ SecurityGroupIds }}"
    - name: PermissionsConfig
      description: |
        Configuration that specifies the permissions required for the capacity provider to manage compute resources.
      value:
        CapacityProviderOperatorRoleArn: "{{ CapacityProviderOperatorRoleArn }}"
    - name: InstanceRequirements
      description: |
        Specifications that define the characteristics and constraints for compute instances used by the capacity provider.
      value:
        Architectures:
          - "{{ Architectures }}"
        AllowedInstanceTypes:
          - "{{ AllowedInstanceTypes }}"
        ExcludedInstanceTypes:
          - "{{ ExcludedInstanceTypes }}"
    - name: CapacityProviderScalingConfig
      description: |
        Configuration that defines how the capacity provider scales compute instances based on demand and policies.
      value:
        MaxVCpuCount: {{ MaxVCpuCount }}
        ScalingMode: "{{ ScalingMode }}"
        ScalingPolicies:
          - PredefinedMetricType: "{{ PredefinedMetricType }}"
            TargetValue: {{ TargetValue }}
    - name: KmsKeyArn
      value: "{{ KmsKeyArn }}"
    - name: Tags
      value: "{{ Tags }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_capacity_provider"
    values={[
        { label: 'update_capacity_provider', value: 'update_capacity_provider' }
    ]}
>
<TabItem value="update_capacity_provider">

Updates the configuration of an existing capacity provider.

```sql
UPDATE aws.lambda.capacity_providers
SET 
CapacityProviderScalingConfig = '{{ CapacityProviderScalingConfig }}'
WHERE 
capacity_provider_name = '{{ capacity_provider_name }}' --required
AND region = '{{ region }}' --required
RETURNING
CapacityProvider;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_capacity_provider"
    values={[
        { label: 'delete_capacity_provider', value: 'delete_capacity_provider' }
    ]}
>
<TabItem value="delete_capacity_provider">

Deletes a capacity provider. You cannot delete a capacity provider that is currently being used by Lambda functions.

```sql
DELETE FROM aws.lambda.capacity_providers
WHERE capacity_provider_name = '{{ capacity_provider_name }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
