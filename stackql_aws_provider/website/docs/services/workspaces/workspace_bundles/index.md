--- 
title: workspace_bundles
hide_title: false
hide_table_of_contents: false
keywords:
  - workspace_bundles
  - workspaces
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

Creates, updates, deletes, gets or lists a <code>workspace_bundles</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="workspace_bundles" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.workspaces.workspace_bundles" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_workspace_bundles"
    values={[
        { label: 'describe_workspace_bundles', value: 'describe_workspace_bundles' }
    ]}
>
<TabItem value="describe_workspace_bundles">

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
    <td><CopyableCode code="BundleId" /></td>
    <td><code>string</code></td>
    <td>The identifier of the bundle. (pattern: &lt;code&gt;^wsb-&#91;0-9a-z&#93;&#123;8,63&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="BundleType" /></td>
    <td><code>string</code></td>
    <td>The type of WorkSpace bundle. (REGULAR, STANDBY)</td>
</tr>
<tr>
    <td><CopyableCode code="ComputeType" /></td>
    <td><code>object</code></td>
    <td>Describes the compute type of the bundle.</td>
</tr>
<tr>
    <td><CopyableCode code="CreationTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time when the bundle was created.</td>
</tr>
<tr>
    <td><CopyableCode code="Description" /></td>
    <td><code>string</code></td>
    <td>The description of the bundle.</td>
</tr>
<tr>
    <td><CopyableCode code="ImageId" /></td>
    <td><code>string</code></td>
    <td>The identifier of the image that was used to create the bundle. (pattern: &lt;code&gt;wsi-&#91;0-9a-z&#93;&#123;9,63&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="LastUpdatedTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The last time that the bundle was updated.</td>
</tr>
<tr>
    <td><CopyableCode code="Name" /></td>
    <td><code>string</code></td>
    <td>The name of the bundle.</td>
</tr>
<tr>
    <td><CopyableCode code="Owner" /></td>
    <td><code>string</code></td>
    <td>The owner of the bundle. This is the account identifier of the owner, or AMAZON if the bundle is provided by Amazon Web Services.</td>
</tr>
<tr>
    <td><CopyableCode code="RootStorage" /></td>
    <td><code>object</code></td>
    <td>Describes the root volume for a WorkSpace bundle.</td>
</tr>
<tr>
    <td><CopyableCode code="State" /></td>
    <td><code>string</code></td>
    <td>The state of the WorkSpace bundle. (AVAILABLE, PENDING, ERROR)</td>
</tr>
<tr>
    <td><CopyableCode code="UserStorage" /></td>
    <td><code>object</code></td>
    <td>Describes the user volume for a WorkSpace bundle.</td>
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
    <td><a href="#describe_workspace_bundles"><CopyableCode code="describe_workspace_bundles" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves a list that describes the available WorkSpace bundles. You can filter the results using either bundle ID or owner, but not both.</td>
</tr>
<tr>
    <td><a href="#create_workspace_bundle"><CopyableCode code="create_workspace_bundle" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-BundleName"><code>BundleName</code></a>, <a href="#parameter-BundleDescription"><code>BundleDescription</code></a>, <a href="#parameter-ImageId"><code>ImageId</code></a>, <a href="#parameter-ComputeType"><code>ComputeType</code></a>, <a href="#parameter-UserStorage"><code>UserStorage</code></a></td>
    <td></td>
    <td>Creates the specified WorkSpace bundle. For more information about creating WorkSpace bundles, see Create a Custom WorkSpaces Image and Bundle.</td>
</tr>
<tr>
    <td><a href="#update_workspace_bundle"><CopyableCode code="update_workspace_bundle" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Updates a WorkSpace bundle with a new image. For more information about updating WorkSpace bundles, see Update a Custom WorkSpaces Bundle. Existing WorkSpaces aren't automatically updated when you update the bundle that they're based on. To update existing WorkSpaces that are based on a bundle that you've updated, you must either rebuild the WorkSpaces or delete and recreate them.</td>
</tr>
<tr>
    <td><a href="#delete_workspace_bundle"><CopyableCode code="delete_workspace_bundle" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes the specified WorkSpace bundle. For more information about deleting WorkSpace bundles, see Delete a Custom WorkSpaces Bundle or Image.</td>
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
    defaultValue="describe_workspace_bundles"
    values={[
        { label: 'describe_workspace_bundles', value: 'describe_workspace_bundles' }
    ]}
>
<TabItem value="describe_workspace_bundles">

Retrieves a list that describes the available WorkSpace bundles. You can filter the results using either bundle ID or owner, but not both.

```sql
SELECT
BundleId,
BundleType,
ComputeType,
CreationTime,
Description,
ImageId,
LastUpdatedTime,
Name,
Owner,
RootStorage,
State,
UserStorage
FROM aws.workspaces.workspace_bundles
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_workspace_bundle"
    values={[
        { label: 'create_workspace_bundle', value: 'create_workspace_bundle' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_workspace_bundle">

Creates the specified WorkSpace bundle. For more information about creating WorkSpace bundles, see Create a Custom WorkSpaces Image and Bundle.

```sql
INSERT INTO aws.workspaces.workspace_bundles (
BundleName,
BundleDescription,
ImageId,
ComputeType,
UserStorage,
RootStorage,
Tags,
region
)
SELECT 
'{{ BundleName }}' /* required */,
'{{ BundleDescription }}' /* required */,
'{{ ImageId }}' /* required */,
'{{ ComputeType }}' /* required */,
'{{ UserStorage }}' /* required */,
'{{ RootStorage }}',
'{{ Tags }}',
'{{ region }}'
RETURNING
WorkspaceBundle
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: workspace_bundles
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the workspace_bundles resource.
    - name: BundleName
      value: "{{ BundleName }}"
      description: |
        The name of the bundle.
    - name: BundleDescription
      value: "{{ BundleDescription }}"
      description: |
        The description of the bundle.
    - name: ImageId
      value: "{{ ImageId }}"
      description: |
        The identifier of the image that is used to create the bundle.
    - name: ComputeType
      description: |
        Describes the compute type of the bundle.
      value:
        Name: "{{ Name }}"
    - name: UserStorage
      description: |
        Describes the user volume for a WorkSpace bundle.
      value:
        Capacity: "{{ Capacity }}"
    - name: RootStorage
      description: |
        Describes the root volume for a WorkSpace bundle.
      value:
        Capacity: "{{ Capacity }}"
    - name: Tags
      description: |
        The tags associated with the bundle. To add tags at the same time when you're creating the bundle, you must create an IAM policy that grants your IAM user permissions to use workspaces:CreateTags.
      value:
        - Key: "{{ Key }}"
          Value: "{{ Value }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_workspace_bundle"
    values={[
        { label: 'update_workspace_bundle', value: 'update_workspace_bundle' }
    ]}
>
<TabItem value="update_workspace_bundle">

Updates a WorkSpace bundle with a new image. For more information about updating WorkSpace bundles, see Update a Custom WorkSpaces Bundle. Existing WorkSpaces aren't automatically updated when you update the bundle that they're based on. To update existing WorkSpaces that are based on a bundle that you've updated, you must either rebuild the WorkSpaces or delete and recreate them.

```sql
UPDATE aws.workspaces.workspace_bundles
SET 
BundleId = '{{ BundleId }}',
ImageId = '{{ ImageId }}'
WHERE 
region = '{{ region }}' --required;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_workspace_bundle"
    values={[
        { label: 'delete_workspace_bundle', value: 'delete_workspace_bundle' }
    ]}
>
<TabItem value="delete_workspace_bundle">

Deletes the specified WorkSpace bundle. For more information about deleting WorkSpace bundles, see Delete a Custom WorkSpaces Bundle or Image.

```sql
DELETE FROM aws.workspaces.workspace_bundles
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
