--- 
title: applications
hide_title: false
hide_table_of_contents: false
keywords:
  - applications
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

Creates, updates, deletes, gets or lists an <code>applications</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="applications" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.appstream.applications" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_applications"
    values={[
        { label: 'describe_applications', value: 'describe_applications' }
    ]}
>
<TabItem value="describe_applications">

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
    <td><CopyableCode code="applications" /></td>
    <td><code>array</code></td>
    <td>The applications in the list.</td>
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
    <td><a href="#describe_applications"><CopyableCode code="describe_applications" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves a list that describes one or more applications.</td>
</tr>
<tr>
    <td><a href="#create_application"><CopyableCode code="create_application" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-Name"><code>Name</code></a>, <a href="#parameter-IconS3Location"><code>IconS3Location</code></a>, <a href="#parameter-LaunchPath"><code>LaunchPath</code></a>, <a href="#parameter-Platforms"><code>Platforms</code></a>, <a href="#parameter-InstanceFamilies"><code>InstanceFamilies</code></a>, <a href="#parameter-AppBlockArn"><code>AppBlockArn</code></a></td>
    <td></td>
    <td>Creates an application. Applications are a WorkSpaces Applications resource that stores the details about how to launch applications on Elastic fleet streaming instances. An application consists of the launch details, icon, and display name. Applications are associated with an app block that contains the application binaries and other files. The applications assigned to an Elastic fleet are the applications users can launch. This is only supported for Elastic fleets.</td>
</tr>
<tr>
    <td><a href="#update_application"><CopyableCode code="update_application" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-Name"><code>Name</code></a></td>
    <td></td>
    <td>Updates the specified application.</td>
</tr>
<tr>
    <td><a href="#delete_application"><CopyableCode code="delete_application" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes an application.</td>
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
    defaultValue="describe_applications"
    values={[
        { label: 'describe_applications', value: 'describe_applications' }
    ]}
>
<TabItem value="describe_applications">

Retrieves a list that describes one or more applications.

```sql
SELECT
applications,
next_token
FROM aws.appstream.applications
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_application"
    values={[
        { label: 'create_application', value: 'create_application' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_application">

Creates an application. Applications are a WorkSpaces Applications resource that stores the details about how to launch applications on Elastic fleet streaming instances. An application consists of the launch details, icon, and display name. Applications are associated with an app block that contains the application binaries and other files. The applications assigned to an Elastic fleet are the applications users can launch. This is only supported for Elastic fleets.

```sql
INSERT INTO aws.appstream.applications (
Name,
DisplayName,
Description,
IconS3Location,
LaunchPath,
WorkingDirectory,
LaunchParameters,
Platforms,
InstanceFamilies,
AppBlockArn,
Tags,
region
)
SELECT 
'{{ Name }}' /* required */,
'{{ DisplayName }}',
'{{ Description }}',
'{{ IconS3Location }}' /* required */,
'{{ LaunchPath }}' /* required */,
'{{ WorkingDirectory }}',
'{{ LaunchParameters }}',
'{{ Platforms }}' /* required */,
'{{ InstanceFamilies }}' /* required */,
'{{ AppBlockArn }}' /* required */,
'{{ Tags }}',
'{{ region }}'
RETURNING
application
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: applications
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the applications resource.
    - name: Name
      value: "{{ Name }}"
      description: |
        The name of the application. This name is visible to users when display name is not specified.
    - name: DisplayName
      value: "{{ DisplayName }}"
      description: |
        The display name of the application. This name is visible to users in the application catalog.
    - name: Description
      value: "{{ Description }}"
      description: |
        The description of the application.
    - name: IconS3Location
      description: |
        The location in S3 of the application icon.
      value:
        S3Bucket: "{{ S3Bucket }}"
        S3Key: "{{ S3Key }}"
    - name: LaunchPath
      value: "{{ LaunchPath }}"
      description: |
        The launch path of the application.
    - name: WorkingDirectory
      value: "{{ WorkingDirectory }}"
      description: |
        The working directory of the application.
    - name: LaunchParameters
      value: "{{ LaunchParameters }}"
      description: |
        The launch parameters of the application.
    - name: Platforms
      value:
        - "{{ Platforms }}"
      description: |
        The platforms the application supports. WINDOWS_SERVER_2019, AMAZON_LINUX2 and UBUNTU_PRO_2404 are supported for Elastic fleets.
    - name: InstanceFamilies
      value:
        - "{{ InstanceFamilies }}"
      description: |
        The instance families the application supports. Valid values are GENERAL_PURPOSE and GRAPHICS_G4.
    - name: AppBlockArn
      value: "{{ AppBlockArn }}"
      description: |
        The app block ARN to which the application should be associated
    - name: Tags
      value: "{{ Tags }}"
      description: |
        The tags assigned to the application.
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_application"
    values={[
        { label: 'update_application', value: 'update_application' }
    ]}
>
<TabItem value="update_application">

Updates the specified application.

```sql
UPDATE aws.appstream.applications
SET 
Name = '{{ Name }}',
DisplayName = '{{ DisplayName }}',
Description = '{{ Description }}',
IconS3Location = '{{ IconS3Location }}',
LaunchPath = '{{ LaunchPath }}',
WorkingDirectory = '{{ WorkingDirectory }}',
LaunchParameters = '{{ LaunchParameters }}',
AppBlockArn = '{{ AppBlockArn }}',
AttributesToDelete = '{{ AttributesToDelete }}'
WHERE 
region = '{{ region }}' --required
AND Name = '{{ Name }}' --required
RETURNING
application;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_application"
    values={[
        { label: 'delete_application', value: 'delete_application' }
    ]}
>
<TabItem value="delete_application">

Deletes an application.

```sql
DELETE FROM aws.appstream.applications
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
