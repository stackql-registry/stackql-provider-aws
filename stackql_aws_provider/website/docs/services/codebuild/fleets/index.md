--- 
title: fleets
hide_title: false
hide_table_of_contents: false
keywords:
  - fleets
  - codebuild
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

Creates, updates, deletes, gets or lists a <code>fleets</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="fleets" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.codebuild.fleets" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="batch_get_fleets"
    values={[
        { label: 'batch_get_fleets', value: 'batch_get_fleets' },
        { label: 'list_fleets', value: 'list_fleets' }
    ]}
>
<TabItem value="batch_get_fleets">

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
    <td><CopyableCode code="fleets" /></td>
    <td><code>array</code></td>
    <td>Information about the requested compute fleets.</td>
</tr>
<tr>
    <td><CopyableCode code="fleets_not_found" /></td>
    <td><code>array</code></td>
    <td>The names of compute fleets for which information could not be found.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_fleets">

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
    <td><CopyableCode code="fleet" /></td>
    <td><code>string</code></td>
    <td>The list of compute fleet names.</td>
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
    <td><a href="#batch_get_fleets"><CopyableCode code="batch_get_fleets" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets information about one or more compute fleets.</td>
</tr>
<tr>
    <td><a href="#list_fleets"><CopyableCode code="list_fleets" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets a list of compute fleet names with each compute fleet name representing a single compute fleet.</td>
</tr>
<tr>
    <td><a href="#create_fleet"><CopyableCode code="create_fleet" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-name"><code>name</code></a>, <a href="#parameter-baseCapacity"><code>baseCapacity</code></a>, <a href="#parameter-environmentType"><code>environmentType</code></a>, <a href="#parameter-computeType"><code>computeType</code></a></td>
    <td></td>
    <td>Creates a compute fleet.</td>
</tr>
<tr>
    <td><a href="#update_fleet"><CopyableCode code="update_fleet" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-arn"><code>arn</code></a></td>
    <td></td>
    <td>Updates a compute fleet.</td>
</tr>
<tr>
    <td><a href="#delete_fleet"><CopyableCode code="delete_fleet" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a compute fleet. When you delete a compute fleet, its builds are not deleted.</td>
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
    defaultValue="batch_get_fleets"
    values={[
        { label: 'batch_get_fleets', value: 'batch_get_fleets' },
        { label: 'list_fleets', value: 'list_fleets' }
    ]}
>
<TabItem value="batch_get_fleets">

Gets information about one or more compute fleets.

```sql
SELECT
fleets,
fleets_not_found
FROM aws.codebuild.fleets
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_fleets">

Gets a list of compute fleet names with each compute fleet name representing a single compute fleet.

```sql
SELECT
fleet
FROM aws.codebuild.fleets
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_fleet"
    values={[
        { label: 'create_fleet', value: 'create_fleet' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_fleet">

Creates a compute fleet.

```sql
INSERT INTO aws.codebuild.fleets (
name,
baseCapacity,
environmentType,
computeType,
computeConfiguration,
scalingConfiguration,
overflowBehavior,
vpcConfig,
proxyConfiguration,
imageId,
fleetServiceRole,
tags,
region
)
SELECT 
'{{ name }}' /* required */,
{{ baseCapacity }} /* required */,
'{{ environmentType }}' /* required */,
'{{ computeType }}' /* required */,
'{{ computeConfiguration }}',
'{{ scalingConfiguration }}',
'{{ overflowBehavior }}',
'{{ vpcConfig }}',
'{{ proxyConfiguration }}',
'{{ imageId }}',
'{{ fleetServiceRole }}',
'{{ tags }}',
'{{ region }}'
RETURNING
fleet
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: fleets
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the fleets resource.
    - name: name
      value: "{{ name }}"
      description: |
        The name of the compute fleet.
    - name: baseCapacity
      value: {{ baseCapacity }}
      description: |
        The initial number of machines allocated to the ﬂeet, which deﬁnes the number of builds that can run in parallel.
    - name: environmentType
      value: "{{ environmentType }}"
      description: |
        The environment type of the compute fleet. The environment type ARM_CONTAINER is available only in regions US East (N. Virginia), US East (Ohio), US West (Oregon), EU (Ireland), Asia Pacific (Mumbai), Asia Pacific (Tokyo), Asia Pacific (Singapore), Asia Pacific (Sydney), EU (Frankfurt), and South America (São Paulo). The environment type ARM_EC2 is available only in regions US East (N. Virginia), US East (Ohio), US West (Oregon), EU (Ireland), EU (Frankfurt), Asia Pacific (Tokyo), Asia Pacific (Singapore), Asia Pacific (Sydney), South America (São Paulo), and Asia Pacific (Mumbai). The environment type LINUX_CONTAINER is available only in regions US East (N. Virginia), US East (Ohio), US West (Oregon), EU (Ireland), EU (Frankfurt), Asia Pacific (Tokyo), Asia Pacific (Singapore), Asia Pacific (Sydney), South America (São Paulo), and Asia Pacific (Mumbai). The environment type LINUX_EC2 is available only in regions US East (N. Virginia), US East (Ohio), US West (Oregon), EU (Ireland), EU (Frankfurt), Asia Pacific (Tokyo), Asia Pacific (Singapore), Asia Pacific (Sydney), South America (São Paulo), and Asia Pacific (Mumbai). The environment type LINUX_GPU_CONTAINER is available only in regions US East (N. Virginia), US East (Ohio), US West (Oregon), EU (Ireland), EU (Frankfurt), Asia Pacific (Tokyo), and Asia Pacific (Sydney). The environment type MAC_ARM is available for Medium fleets only in regions US East (N. Virginia), US East (Ohio), US West (Oregon), Asia Pacific (Sydney), and EU (Frankfurt) The environment type MAC_ARM is available for Large fleets only in regions US East (N. Virginia), US East (Ohio), US West (Oregon), and Asia Pacific (Sydney). The environment type WINDOWS_EC2 is available only in regions US East (N. Virginia), US East (Ohio), US West (Oregon), EU (Ireland), EU (Frankfurt), Asia Pacific (Tokyo), Asia Pacific (Singapore), Asia Pacific (Sydney), South America (São Paulo), and Asia Pacific (Mumbai). The environment type WINDOWS_SERVER_2019_CONTAINER is available only in regions US East (N. Virginia), US East (Ohio), US West (Oregon), Asia Pacific (Sydney), Asia Pacific (Tokyo), Asia Pacific (Mumbai) and EU (Ireland). The environment type WINDOWS_SERVER_2022_CONTAINER is available only in regions US East (N. Virginia), US East (Ohio), US West (Oregon), EU (Ireland), EU (Frankfurt), Asia Pacific (Sydney), Asia Pacific (Singapore), Asia Pacific (Tokyo), South America (São Paulo) and Asia Pacific (Mumbai). For more information, see Build environment compute types in the CodeBuild user guide.
      valid_values: ['WINDOWS_CONTAINER', 'LINUX_CONTAINER', 'LINUX_GPU_CONTAINER', 'ARM_CONTAINER', 'WINDOWS_SERVER_2019_CONTAINER', 'WINDOWS_SERVER_2022_CONTAINER', 'LINUX_LAMBDA_CONTAINER', 'ARM_LAMBDA_CONTAINER', 'LINUX_EC2', 'ARM_EC2', 'WINDOWS_EC2', 'MAC_ARM']
    - name: computeType
      value: "{{ computeType }}"
      description: |
        Information about the compute resources the compute fleet uses. Available values include: ATTRIBUTE_BASED_COMPUTE: Specify the amount of vCPUs, memory, disk space, and the type of machine. If you use ATTRIBUTE_BASED_COMPUTE, you must define your attributes by using computeConfiguration. CodeBuild will select the cheapest instance that satisfies your specified attributes. For more information, see Reserved capacity environment types in the CodeBuild User Guide. CUSTOM_INSTANCE_TYPE: Specify the instance type for your compute fleet. For a list of supported instance types, see Supported instance families in the CodeBuild User Guide. BUILD_GENERAL1_SMALL: Use up to 4 GiB memory and 2 vCPUs for builds. BUILD_GENERAL1_MEDIUM: Use up to 8 GiB memory and 4 vCPUs for builds. BUILD_GENERAL1_LARGE: Use up to 16 GiB memory and 8 vCPUs for builds, depending on your environment type. BUILD_GENERAL1_XLARGE: Use up to 72 GiB memory and 36 vCPUs for builds, depending on your environment type. BUILD_GENERAL1_2XLARGE: Use up to 144 GiB memory, 72 vCPUs, and 824 GB of SSD storage for builds. This compute type supports Docker images up to 100 GB uncompressed. BUILD_LAMBDA_1GB: Use up to 1 GiB memory for builds. Only available for environment type LINUX_LAMBDA_CONTAINER and ARM_LAMBDA_CONTAINER. BUILD_LAMBDA_2GB: Use up to 2 GiB memory for builds. Only available for environment type LINUX_LAMBDA_CONTAINER and ARM_LAMBDA_CONTAINER. BUILD_LAMBDA_4GB: Use up to 4 GiB memory for builds. Only available for environment type LINUX_LAMBDA_CONTAINER and ARM_LAMBDA_CONTAINER. BUILD_LAMBDA_8GB: Use up to 8 GiB memory for builds. Only available for environment type LINUX_LAMBDA_CONTAINER and ARM_LAMBDA_CONTAINER. BUILD_LAMBDA_10GB: Use up to 10 GiB memory for builds. Only available for environment type LINUX_LAMBDA_CONTAINER and ARM_LAMBDA_CONTAINER. If you use BUILD_GENERAL1_SMALL: For environment type LINUX_CONTAINER, you can use up to 4 GiB memory and 2 vCPUs for builds. For environment type LINUX_GPU_CONTAINER, you can use up to 16 GiB memory, 4 vCPUs, and 1 NVIDIA A10G Tensor Core GPU for builds. For environment type ARM_CONTAINER, you can use up to 4 GiB memory and 2 vCPUs on ARM-based processors for builds. If you use BUILD_GENERAL1_LARGE: For environment type LINUX_CONTAINER, you can use up to 16 GiB memory and 8 vCPUs for builds. For environment type LINUX_GPU_CONTAINER, you can use up to 255 GiB memory, 32 vCPUs, and 4 NVIDIA Tesla V100 GPUs for builds. For environment type ARM_CONTAINER, you can use up to 16 GiB memory and 8 vCPUs on ARM-based processors for builds. For more information, see On-demand environment types in the CodeBuild User Guide.
      valid_values: ['BUILD_GENERAL1_SMALL', 'BUILD_GENERAL1_MEDIUM', 'BUILD_GENERAL1_LARGE', 'BUILD_GENERAL1_XLARGE', 'BUILD_GENERAL1_2XLARGE', 'BUILD_LAMBDA_1GB', 'BUILD_LAMBDA_2GB', 'BUILD_LAMBDA_4GB', 'BUILD_LAMBDA_8GB', 'BUILD_LAMBDA_10GB', 'ATTRIBUTE_BASED_COMPUTE', 'CUSTOM_INSTANCE_TYPE']
    - name: computeConfiguration
      description: |
        The compute configuration of the compute fleet. This is only required if computeType is set to ATTRIBUTE_BASED_COMPUTE or CUSTOM_INSTANCE_TYPE.
      value:
        vCpu: {{ vCpu }}
        memory: {{ memory }}
        disk: {{ disk }}
        machineType: "{{ machineType }}"
        instanceType: "{{ instanceType }}"
    - name: scalingConfiguration
      description: |
        The scaling configuration of the compute fleet.
      value:
        scalingType: "{{ scalingType }}"
        targetTrackingScalingConfigs:
          - metricType: "{{ metricType }}"
            targetValue: {{ targetValue }}
        maxCapacity: {{ maxCapacity }}
    - name: overflowBehavior
      value: "{{ overflowBehavior }}"
      description: |
        The compute fleet overflow behavior. For overflow behavior QUEUE, your overflow builds need to wait on the existing fleet instance to become available. For overflow behavior ON_DEMAND, your overflow builds run on CodeBuild on-demand. If you choose to set your overflow behavior to on-demand while creating a VPC-connected fleet, make sure that you add the required VPC permissions to your project service role. For more information, see Example policy statement to allow CodeBuild access to Amazon Web Services services required to create a VPC network interface.
      valid_values: ['QUEUE', 'ON_DEMAND']
    - name: vpcConfig
      description: |
        Information about the VPC configuration that CodeBuild accesses.
      value:
        vpcId: "{{ vpcId }}"
        subnets:
          - "{{ subnets }}"
        securityGroupIds:
          - "{{ securityGroupIds }}"
    - name: proxyConfiguration
      description: |
        The proxy configuration of the compute fleet.
      value:
        defaultBehavior: "{{ defaultBehavior }}"
        orderedProxyRules:
          - type_: "{{ type_ }}"
            effect: "{{ effect }}"
            entities: "{{ entities }}"
    - name: imageId
      value: "{{ imageId }}"
      description: |
        The Amazon Machine Image (AMI) of the compute fleet.
    - name: fleetServiceRole
      value: "{{ fleetServiceRole }}"
      description: |
        The service role associated with the compute fleet. For more information, see Allow a user to add a permission policy for a fleet service role in the CodeBuild User Guide.
    - name: tags
      description: |
        A list of tag key and value pairs associated with this compute fleet. These tags are available for use by Amazon Web Services services that support CodeBuild build project tags.
      value:
        - key: "{{ key }}"
          value: "{{ value }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_fleet"
    values={[
        { label: 'update_fleet', value: 'update_fleet' }
    ]}
>
<TabItem value="update_fleet">

Updates a compute fleet.

```sql
UPDATE aws.codebuild.fleets
SET 
arn = '{{ arn }}',
baseCapacity = {{ baseCapacity }},
environmentType = '{{ environmentType }}',
computeType = '{{ computeType }}',
computeConfiguration = '{{ computeConfiguration }}',
scalingConfiguration = '{{ scalingConfiguration }}',
overflowBehavior = '{{ overflowBehavior }}',
vpcConfig = '{{ vpcConfig }}',
proxyConfiguration = '{{ proxyConfiguration }}',
imageId = '{{ imageId }}',
fleetServiceRole = '{{ fleetServiceRole }}',
tags = '{{ tags }}'
WHERE 
region = '{{ region }}' --required
AND arn = '{{ arn }}' --required
RETURNING
fleet;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_fleet"
    values={[
        { label: 'delete_fleet', value: 'delete_fleet' }
    ]}
>
<TabItem value="delete_fleet">

Deletes a compute fleet. When you delete a compute fleet, its builds are not deleted.

```sql
DELETE FROM aws.codebuild.fleets
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
