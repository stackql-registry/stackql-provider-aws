--- 
title: app_blocks
hide_title: false
hide_table_of_contents: false
keywords:
  - app_blocks
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

Creates, updates, deletes, gets or lists an <code>app_blocks</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="app_blocks" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.appstream.app_blocks" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_app_blocks"
    values={[
        { label: 'describe_app_blocks', value: 'describe_app_blocks' }
    ]}
>
<TabItem value="describe_app_blocks">

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
    <td><CopyableCode code="app_blocks" /></td>
    <td><code>array</code></td>
    <td>The app blocks in the list.</td>
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
    <td><a href="#describe_app_blocks"><CopyableCode code="describe_app_blocks" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves a list that describes one or more app blocks.</td>
</tr>
<tr>
    <td><a href="#create_app_block"><CopyableCode code="create_app_block" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-Name"><code>Name</code></a>, <a href="#parameter-SourceS3Location"><code>SourceS3Location</code></a></td>
    <td></td>
    <td>Creates an app block. App blocks are a WorkSpaces Applications resource that stores the details about the virtual hard disk in an S3 bucket. It also stores the setup script with details about how to mount the virtual hard disk. The virtual hard disk includes the application binaries and other files necessary to launch your applications. Multiple applications can be assigned to a single app block. This is only supported for Elastic fleets.</td>
</tr>
<tr>
    <td><a href="#associate_app_block_builder_app_block"><CopyableCode code="associate_app_block_builder_app_block" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-AppBlockArn"><code>AppBlockArn</code></a>, <a href="#parameter-AppBlockBuilderName"><code>AppBlockBuilderName</code></a></td>
    <td></td>
    <td>Associates the specified app block builder with the specified app block.</td>
</tr>
<tr>
    <td><a href="#delete_app_block"><CopyableCode code="delete_app_block" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes an app block.</td>
</tr>
<tr>
    <td><a href="#disassociate_app_block_builder_app_block"><CopyableCode code="disassociate_app_block_builder_app_block" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-AppBlockArn"><code>AppBlockArn</code></a>, <a href="#parameter-AppBlockBuilderName"><code>AppBlockBuilderName</code></a></td>
    <td></td>
    <td>Disassociates a specified app block builder from a specified app block.</td>
</tr>
<tr>
    <td><a href="#start_app_block_builder"><CopyableCode code="start_app_block_builder" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-Name"><code>Name</code></a></td>
    <td></td>
    <td>Starts an app block builder. An app block builder can only be started when it's associated with an app block. Starting an app block builder starts a new instance, which is equivalent to an elastic fleet instance with application builder assistance functionality.</td>
</tr>
<tr>
    <td><a href="#stop_app_block_builder"><CopyableCode code="stop_app_block_builder" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-Name"><code>Name</code></a></td>
    <td></td>
    <td>Stops an app block builder. Stopping an app block builder terminates the instance, and the instance state is not persisted.</td>
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
    defaultValue="describe_app_blocks"
    values={[
        { label: 'describe_app_blocks', value: 'describe_app_blocks' }
    ]}
>
<TabItem value="describe_app_blocks">

Retrieves a list that describes one or more app blocks.

```sql
SELECT
app_blocks,
next_token
FROM aws.appstream.app_blocks
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_app_block"
    values={[
        { label: 'create_app_block', value: 'create_app_block' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_app_block">

Creates an app block. App blocks are a WorkSpaces Applications resource that stores the details about the virtual hard disk in an S3 bucket. It also stores the setup script with details about how to mount the virtual hard disk. The virtual hard disk includes the application binaries and other files necessary to launch your applications. Multiple applications can be assigned to a single app block. This is only supported for Elastic fleets.

```sql
INSERT INTO aws.appstream.app_blocks (
Name,
Description,
DisplayName,
SourceS3Location,
SetupScriptDetails,
Tags,
PostSetupScriptDetails,
PackagingType,
region
)
SELECT 
'{{ Name }}' /* required */,
'{{ Description }}',
'{{ DisplayName }}',
'{{ SourceS3Location }}' /* required */,
'{{ SetupScriptDetails }}',
'{{ Tags }}',
'{{ PostSetupScriptDetails }}',
'{{ PackagingType }}',
'{{ region }}'
RETURNING
app_block
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: app_blocks
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the app_blocks resource.
    - name: Name
      value: "{{ Name }}"
      description: |
        The name of the app block.
    - name: Description
      value: "{{ Description }}"
      description: |
        The description of the app block.
    - name: DisplayName
      value: "{{ DisplayName }}"
      description: |
        The display name of the app block. This is not displayed to the user.
    - name: SourceS3Location
      description: |
        The source S3 location of the app block.
      value:
        S3Bucket: "{{ S3Bucket }}"
        S3Key: "{{ S3Key }}"
    - name: SetupScriptDetails
      description: |
        The setup script details of the app block. This must be provided for the CUSTOM PackagingType.
      value:
        ScriptS3Location:
          S3Bucket: "{{ S3Bucket }}"
          S3Key: "{{ S3Key }}"
        ExecutablePath: "{{ ExecutablePath }}"
        ExecutableParameters: "{{ ExecutableParameters }}"
        TimeoutInSeconds: {{ TimeoutInSeconds }}
    - name: Tags
      value: "{{ Tags }}"
      description: |
        The tags assigned to the app block.
    - name: PostSetupScriptDetails
      description: |
        The post setup script details of the app block. This can only be provided for the APPSTREAM2 PackagingType.
      value:
        ScriptS3Location:
          S3Bucket: "{{ S3Bucket }}"
          S3Key: "{{ S3Key }}"
        ExecutablePath: "{{ ExecutablePath }}"
        ExecutableParameters: "{{ ExecutableParameters }}"
        TimeoutInSeconds: {{ TimeoutInSeconds }}
    - name: PackagingType
      value: "{{ PackagingType }}"
      description: |
        The packaging type of the app block.
      valid_values: ['CUSTOM', 'APPSTREAM2']
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="associate_app_block_builder_app_block"
    values={[
        { label: 'associate_app_block_builder_app_block', value: 'associate_app_block_builder_app_block' }
    ]}
>
<TabItem value="associate_app_block_builder_app_block">

Associates the specified app block builder with the specified app block.

```sql
UPDATE aws.appstream.app_blocks
SET 
AppBlockArn = '{{ AppBlockArn }}',
AppBlockBuilderName = '{{ AppBlockBuilderName }}'
WHERE 
region = '{{ region }}' --required
AND AppBlockArn = '{{ AppBlockArn }}' --required
AND AppBlockBuilderName = '{{ AppBlockBuilderName }}' --required
RETURNING
app_block_builder_app_block_association;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_app_block"
    values={[
        { label: 'delete_app_block', value: 'delete_app_block' }
    ]}
>
<TabItem value="delete_app_block">

Deletes an app block.

```sql
DELETE FROM aws.appstream.app_blocks
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="disassociate_app_block_builder_app_block"
    values={[
        { label: 'disassociate_app_block_builder_app_block', value: 'disassociate_app_block_builder_app_block' },
        { label: 'start_app_block_builder', value: 'start_app_block_builder' },
        { label: 'stop_app_block_builder', value: 'stop_app_block_builder' }
    ]}
>
<TabItem value="disassociate_app_block_builder_app_block">

Disassociates a specified app block builder from a specified app block.

```sql
EXEC aws.appstream.app_blocks.disassociate_app_block_builder_app_block 
@region='{{ region }}' --required 
@@json=
'{
"AppBlockArn": "{{ AppBlockArn }}", 
"AppBlockBuilderName": "{{ AppBlockBuilderName }}"
}'
;
```
</TabItem>
<TabItem value="start_app_block_builder">

Starts an app block builder. An app block builder can only be started when it's associated with an app block. Starting an app block builder starts a new instance, which is equivalent to an elastic fleet instance with application builder assistance functionality.

```sql
EXEC aws.appstream.app_blocks.start_app_block_builder 
@region='{{ region }}' --required 
@@json=
'{
"Name": "{{ Name }}"
}'
;
```
</TabItem>
<TabItem value="stop_app_block_builder">

Stops an app block builder. Stopping an app block builder terminates the instance, and the instance state is not persisted.

```sql
EXEC aws.appstream.app_blocks.stop_app_block_builder 
@region='{{ region }}' --required 
@@json=
'{
"Name": "{{ Name }}"
}'
;
```
</TabItem>
</Tabs>
