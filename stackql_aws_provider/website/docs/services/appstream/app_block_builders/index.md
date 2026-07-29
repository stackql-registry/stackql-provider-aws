--- 
title: app_block_builders
hide_title: false
hide_table_of_contents: false
keywords:
  - app_block_builders
  - appstream
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

Creates, updates, deletes, gets or lists an <code>app_block_builders</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="app_block_builders" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.appstream.app_block_builders" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_app_block_builders"
    values={[
        { label: 'describe_app_block_builders', value: 'describe_app_block_builders' }
    ]}
>
<TabItem value="describe_app_block_builders">

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
    <td><CopyableCode code="app_block_builders" /></td>
    <td><code>array</code></td>
    <td>The list that describes one or more app block builders.</td>
</tr>
<tr>
    <td><CopyableCode code="next_token" /></td>
    <td><code>string</code></td>
    <td>The pagination token used to retrieve the next page of results for this operation.</td>
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
    <td><a href="#describe_app_block_builders"><CopyableCode code="describe_app_block_builders" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves a list that describes one or more app block builders.</td>
</tr>
<tr>
    <td><a href="#create_app_block_builder"><CopyableCode code="create_app_block_builder" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-Name"><code>Name</code></a>, <a href="#parameter-Platform"><code>Platform</code></a>, <a href="#parameter-InstanceType"><code>InstanceType</code></a>, <a href="#parameter-VpcConfig"><code>VpcConfig</code></a></td>
    <td></td>
    <td>Creates an app block builder.</td>
</tr>
<tr>
    <td><a href="#create_app_block_builder_streaming_url"><CopyableCode code="create_app_block_builder_streaming_url" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-AppBlockBuilderName"><code>AppBlockBuilderName</code></a></td>
    <td></td>
    <td>Creates a URL to start a create app block builder streaming session.</td>
</tr>
<tr>
    <td><a href="#update_app_block_builder"><CopyableCode code="update_app_block_builder" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-Name"><code>Name</code></a></td>
    <td></td>
    <td>Updates an app block builder. If the app block builder is in the STARTING or STOPPING state, you can't update it. If the app block builder is in the RUNNING state, you can only update the DisplayName and Description. If the app block builder is in the STOPPED state, you can update any attribute except the Name.</td>
</tr>
<tr>
    <td><a href="#delete_app_block_builder"><CopyableCode code="delete_app_block_builder" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes an app block builder. An app block builder can only be deleted when it has no association with an app block.</td>
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
    defaultValue="describe_app_block_builders"
    values={[
        { label: 'describe_app_block_builders', value: 'describe_app_block_builders' }
    ]}
>
<TabItem value="describe_app_block_builders">

Retrieves a list that describes one or more app block builders.

```sql
SELECT
app_block_builders,
next_token
FROM aws.appstream.app_block_builders
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_app_block_builder"
    values={[
        { label: 'create_app_block_builder', value: 'create_app_block_builder' },
        { label: 'create_app_block_builder_streaming_url', value: 'create_app_block_builder_streaming_url' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_app_block_builder">

Creates an app block builder.

```sql
INSERT INTO aws.appstream.app_block_builders (
Name,
Description,
DisplayName,
Tags,
Platform,
InstanceType,
VpcConfig,
EnableDefaultInternetAccess,
IamRoleArn,
AccessEndpoints,
DisableIMDSV1,
region
)
SELECT 
'{{ Name }}' /* required */,
'{{ Description }}',
'{{ DisplayName }}',
'{{ Tags }}',
'{{ Platform }}' /* required */,
'{{ InstanceType }}' /* required */,
'{{ VpcConfig }}' /* required */,
{{ EnableDefaultInternetAccess }},
'{{ IamRoleArn }}',
'{{ AccessEndpoints }}',
{{ DisableIMDSV1 }},
'{{ region }}'
RETURNING
app_block_builder
;
```
</TabItem>
<TabItem value="create_app_block_builder_streaming_url">

Creates a URL to start a create app block builder streaming session.

```sql
INSERT INTO aws.appstream.app_block_builders (
AppBlockBuilderName,
Validity,
region
)
SELECT 
'{{ AppBlockBuilderName }}' /* required */,
{{ Validity }},
'{{ region }}'
RETURNING
expires,
streaming_url
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: app_block_builders
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the app_block_builders resource.
    - name: Name
      value: "{{ Name }}"
      description: |
        The unique name for the app block builder.
    - name: Description
      value: "{{ Description }}"
      description: |
        The description of the app block builder.
    - name: DisplayName
      value: "{{ DisplayName }}"
      description: |
        The display name of the app block builder.
    - name: Tags
      value: "{{ Tags }}"
      description: |
        The tags to associate with the app block builder. A tag is a key-value pair, and the value is optional. For example, Environment=Test. If you do not specify a value, Environment=. If you do not specify a value, the value is set to an empty string. Generally allowed characters are: letters, numbers, and spaces representable in UTF-8, and the following special characters: _ . : / = + \ - @ For more information, see Tagging Your Resources in the Amazon WorkSpaces Applications Administration Guide.
    - name: Platform
      value: "{{ Platform }}"
      description: |
        The platform of the app block builder. WINDOWS_SERVER_2019 is the only valid value.
      valid_values: ['WINDOWS_SERVER_2019']
    - name: InstanceType
      value: "{{ InstanceType }}"
      description: |
        The instance type to use when launching the app block builder. The following instance types are available: stream.standard.small stream.standard.medium stream.standard.large stream.standard.xlarge stream.standard.2xlarge
    - name: VpcConfig
      description: |
        The VPC configuration for the app block builder. App block builders require that you specify at least two subnets in different availability zones.
      value:
        SubnetIds:
          - "{{ SubnetIds }}"
        SecurityGroupIds:
          - "{{ SecurityGroupIds }}"
    - name: EnableDefaultInternetAccess
      value: {{ EnableDefaultInternetAccess }}
      description: |
        Enables or disables default internet access for the app block builder.
    - name: IamRoleArn
      value: "{{ IamRoleArn }}"
      description: |
        The Amazon Resource Name (ARN) of the IAM role to apply to the app block builder. To assume a role, the app block builder calls the AWS Security Token Service (STS) AssumeRole API operation and passes the ARN of the role to use. The operation creates a new session with temporary credentials. WorkSpaces Applications retrieves the temporary credentials and creates the appstream_machine_role credential profile on the instance. For more information, see Using an IAM Role to Grant Permissions to Applications and Scripts Running on WorkSpaces Applications Streaming Instances in the Amazon WorkSpaces Applications Administration Guide.
    - name: AccessEndpoints
      description: |
        The list of interface VPC endpoint (interface endpoint) objects. Administrators can connect to the app block builder only through the specified endpoints.
      value:
        - EndpointType: "{{ EndpointType }}"
          VpceId: "{{ VpceId }}"
    - name: DisableIMDSV1
      value: {{ DisableIMDSV1 }}
      description: |
        Set to true to disable Instance Metadata Service Version 1 (IMDSv1) and enforce IMDSv2. Set to false to enable both IMDSv1 and IMDSv2.
    - name: AppBlockBuilderName
      value: "{{ AppBlockBuilderName }}"
      description: |
        The name of the app block builder.
    - name: Validity
      value: {{ Validity }}
      description: |
        The time that the streaming URL will be valid, in seconds. Specify a value between 1 and 604800 seconds. The default is 3600 seconds.
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_app_block_builder"
    values={[
        { label: 'update_app_block_builder', value: 'update_app_block_builder' }
    ]}
>
<TabItem value="update_app_block_builder">

Updates an app block builder. If the app block builder is in the STARTING or STOPPING state, you can't update it. If the app block builder is in the RUNNING state, you can only update the DisplayName and Description. If the app block builder is in the STOPPED state, you can update any attribute except the Name.

```sql
UPDATE aws.appstream.app_block_builders
SET 
Name = '{{ Name }}',
Description = '{{ Description }}',
DisplayName = '{{ DisplayName }}',
Platform = '{{ Platform }}',
InstanceType = '{{ InstanceType }}',
VpcConfig = '{{ VpcConfig }}',
EnableDefaultInternetAccess = {{ EnableDefaultInternetAccess }},
IamRoleArn = '{{ IamRoleArn }}',
AccessEndpoints = '{{ AccessEndpoints }}',
AttributesToDelete = '{{ AttributesToDelete }}',
DisableIMDSV1 = {{ DisableIMDSV1 }}
WHERE 
region = '{{ region }}' --required
AND Name = '{{ Name }}' --required
RETURNING
app_block_builder;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_app_block_builder"
    values={[
        { label: 'delete_app_block_builder', value: 'delete_app_block_builder' }
    ]}
>
<TabItem value="delete_app_block_builder">

Deletes an app block builder. An app block builder can only be deleted when it has no association with an app block.

```sql
DELETE FROM aws.appstream.app_block_builders
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
