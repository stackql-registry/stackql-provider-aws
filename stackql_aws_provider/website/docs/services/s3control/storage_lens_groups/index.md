--- 
title: storage_lens_groups
hide_title: false
hide_table_of_contents: false
keywords:
  - storage_lens_groups
  - s3control
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

Creates, updates, deletes, gets or lists a <code>storage_lens_groups</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="storage_lens_groups" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.s3control.storage_lens_groups" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_storage_lens_group"
    values={[
        { label: 'get_storage_lens_group', value: 'get_storage_lens_group' },
        { label: 'list_storage_lens_groups', value: 'list_storage_lens_groups' }
    ]}
>
<TabItem value="get_storage_lens_group">

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
    <td><CopyableCode code="Filter" /></td>
    <td><code>string</code></td>
    <td>Sets the criteria for the Storage Lens group data that is displayed. For multiple filter conditions, the AND or OR logical operator is used.</td>
</tr>
<tr>
    <td><CopyableCode code="Name" /></td>
    <td><code>string</code></td>
    <td>Contains the name of the Storage Lens group.</td>
</tr>
<tr>
    <td><CopyableCode code="StorageLensGroupArn" /></td>
    <td><code>string</code></td>
    <td>Contains the Amazon Resource Name (ARN) of the Storage Lens group. This property is read-only.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_storage_lens_groups">

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
    <td><CopyableCode code="HomeRegion" /></td>
    <td><code>string</code></td>
    <td>Contains the Amazon Web Services Region where the Storage Lens group was created.</td>
</tr>
<tr>
    <td><CopyableCode code="Name" /></td>
    <td><code>string</code></td>
    <td>Contains the name of the Storage Lens group that exists in the specified home Region.</td>
</tr>
<tr>
    <td><CopyableCode code="StorageLensGroupArn" /></td>
    <td><code>string</code></td>
    <td>Contains the Amazon Resource Name (ARN) of the Storage Lens group. This property is read-only.</td>
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
    <td><a href="#get_storage_lens_group"><CopyableCode code="get_storage_lens_group" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-name"><code>name</code></a>, <a href="#parameter-x-amz-account-id"><code>x-amz-account-id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves the Storage Lens group configuration details. To use this operation, you must have the permission to perform the s3:GetStorageLensGroup action. For more information about the required Storage Lens Groups permissions, see Setting account permissions to use S3 Storage Lens groups. For information about Storage Lens groups errors, see List of Amazon S3 Storage Lens error codes.</td>
</tr>
<tr>
    <td><a href="#list_storage_lens_groups"><CopyableCode code="list_storage_lens_groups" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-x-amz-account-id"><code>x-amz-account-id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-nextToken"><code>nextToken</code></a></td>
    <td>Lists all the Storage Lens groups in the specified home Region. To use this operation, you must have the permission to perform the s3:ListStorageLensGroups action. For more information about the required Storage Lens Groups permissions, see Setting account permissions to use S3 Storage Lens groups. For information about Storage Lens groups errors, see List of Amazon S3 Storage Lens error codes.</td>
</tr>
<tr>
    <td><a href="#create_storage_lens_group"><CopyableCode code="create_storage_lens_group" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-x-amz-account-id"><code>x-amz-account-id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-StorageLensGroup"><code>StorageLensGroup</code></a></td>
    <td></td>
    <td>Creates a new S3 Storage Lens group and associates it with the specified Amazon Web Services account ID. An S3 Storage Lens group is a custom grouping of objects based on prefix, suffix, object tags, object size, object age, or a combination of these filters. For each Storage Lens group that you’ve created, you can also optionally add Amazon Web Services resource tags. For more information about S3 Storage Lens groups, see Working with S3 Storage Lens groups. To use this operation, you must have the permission to perform the s3:CreateStorageLensGroup action. If you’re trying to create a Storage Lens group with Amazon Web Services resource tags, you must also have permission to perform the s3:TagResource action. For more information about the required Storage Lens Groups permissions, see Setting account permissions to use S3 Storage Lens groups. For information about Storage Lens groups errors, see List of Amazon S3 Storage Lens error codes.</td>
</tr>
<tr>
    <td><a href="#update_storage_lens_group"><CopyableCode code="update_storage_lens_group" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-name"><code>name</code></a>, <a href="#parameter-x-amz-account-id"><code>x-amz-account-id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-StorageLensGroup"><code>StorageLensGroup</code></a></td>
    <td></td>
    <td>Updates the existing Storage Lens group. To use this operation, you must have the permission to perform the s3:UpdateStorageLensGroup action. For more information about the required Storage Lens Groups permissions, see Setting account permissions to use S3 Storage Lens groups. For information about Storage Lens groups errors, see List of Amazon S3 Storage Lens error codes.</td>
</tr>
<tr>
    <td><a href="#delete_storage_lens_group"><CopyableCode code="delete_storage_lens_group" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-name"><code>name</code></a>, <a href="#parameter-x-amz-account-id"><code>x-amz-account-id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes an existing S3 Storage Lens group. To use this operation, you must have the permission to perform the s3:DeleteStorageLensGroup action. For more information about the required Storage Lens Groups permissions, see Setting account permissions to use S3 Storage Lens groups. For information about Storage Lens groups errors, see List of Amazon S3 Storage Lens error codes.</td>
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
<tr id="parameter-name">
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the Storage Lens group that you're trying to delete.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-x-amz-account-id">
    <td><CopyableCode code="x-amz-account-id" /></td>
    <td><code>string</code></td>
    <td>The Amazon Web Services account ID used to create the Storage Lens group that you're trying to delete.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>The token for the next set of results, or null if there are no more results.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_storage_lens_group"
    values={[
        { label: 'get_storage_lens_group', value: 'get_storage_lens_group' },
        { label: 'list_storage_lens_groups', value: 'list_storage_lens_groups' }
    ]}
>
<TabItem value="get_storage_lens_group">

Retrieves the Storage Lens group configuration details. To use this operation, you must have the permission to perform the s3:GetStorageLensGroup action. For more information about the required Storage Lens Groups permissions, see Setting account permissions to use S3 Storage Lens groups. For information about Storage Lens groups errors, see List of Amazon S3 Storage Lens error codes.

```sql
SELECT
Filter,
Name,
StorageLensGroupArn
FROM aws.s3control.storage_lens_groups
WHERE name = '{{ name }}' -- required
AND `x-amz-account-id` = '{{ x-amz-account-id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_storage_lens_groups">

Lists all the Storage Lens groups in the specified home Region. To use this operation, you must have the permission to perform the s3:ListStorageLensGroups action. For more information about the required Storage Lens Groups permissions, see Setting account permissions to use S3 Storage Lens groups. For information about Storage Lens groups errors, see List of Amazon S3 Storage Lens error codes.

```sql
SELECT
HomeRegion,
Name,
StorageLensGroupArn
FROM aws.s3control.storage_lens_groups
WHERE `x-amz-account-id` = '{{ x-amz-account-id }}' -- required
AND region = '{{ region }}' -- required
AND nextToken = '{{ nextToken }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_storage_lens_group"
    values={[
        { label: 'create_storage_lens_group', value: 'create_storage_lens_group' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_storage_lens_group">

Creates a new S3 Storage Lens group and associates it with the specified Amazon Web Services account ID. An S3 Storage Lens group is a custom grouping of objects based on prefix, suffix, object tags, object size, object age, or a combination of these filters. For each Storage Lens group that you’ve created, you can also optionally add Amazon Web Services resource tags. For more information about S3 Storage Lens groups, see Working with S3 Storage Lens groups. To use this operation, you must have the permission to perform the s3:CreateStorageLensGroup action. If you’re trying to create a Storage Lens group with Amazon Web Services resource tags, you must also have permission to perform the s3:TagResource action. For more information about the required Storage Lens Groups permissions, see Setting account permissions to use S3 Storage Lens groups. For information about Storage Lens groups errors, see List of Amazon S3 Storage Lens error codes.

```sql
INSERT INTO aws.s3control.storage_lens_groups (
StorageLensGroup,
Tags,
`x-amz-account-id`,
region
)
SELECT 
'{{ StorageLensGroup }}' /* required */,
'{{ Tags }}',
'{{ x-amz-account-id }}',
'{{ region }}'
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: storage_lens_groups
  props:
    - name: x-amz-account-id
      value: "{{ x-amz-account-id }}"
      description: Required parameter for the storage_lens_groups resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the storage_lens_groups resource.
    - name: StorageLensGroup
      description: |
        A custom grouping of objects that include filters for prefixes, suffixes, object tags, object size, or object age. You can create an S3 Storage Lens group that includes a single filter or multiple filter conditions. To specify multiple filter conditions, you use AND or OR logical operators.
      value:
        Name: "{{ Name }}"
        Filter:
          MatchAnyPrefix:
            - "{{ MatchAnyPrefix }}"
          MatchAnySuffix:
            - "{{ MatchAnySuffix }}"
          MatchAnyTag:
            - Key: "{{ Key }}"
              Value: "{{ Value }}"
          MatchObjectAge:
            DaysGreaterThan: {{ DaysGreaterThan }}
            DaysLessThan: {{ DaysLessThan }}
          MatchObjectSize:
            BytesGreaterThan: {{ BytesGreaterThan }}
            BytesLessThan: {{ BytesLessThan }}
          And:
            MatchAnyPrefix:
              - "{{ MatchAnyPrefix }}"
            MatchAnySuffix:
              - "{{ MatchAnySuffix }}"
            MatchAnyTag:
              - Key: "{{ Key }}"
                Value: "{{ Value }}"
            MatchObjectAge:
              DaysGreaterThan: {{ DaysGreaterThan }}
              DaysLessThan: {{ DaysLessThan }}
            MatchObjectSize:
              BytesGreaterThan: {{ BytesGreaterThan }}
              BytesLessThan: {{ BytesLessThan }}
          Or:
            MatchAnyPrefix:
              - "{{ MatchAnyPrefix }}"
            MatchAnySuffix:
              - "{{ MatchAnySuffix }}"
            MatchAnyTag:
              - Key: "{{ Key }}"
                Value: "{{ Value }}"
            MatchObjectAge:
              DaysGreaterThan: {{ DaysGreaterThan }}
              DaysLessThan: {{ DaysLessThan }}
            MatchObjectSize:
              BytesGreaterThan: {{ BytesGreaterThan }}
              BytesLessThan: {{ BytesLessThan }}
        StorageLensGroupArn: "{{ StorageLensGroupArn }}"
    - name: Tags
      value:
        - Key: "{{ Key }}"
          Value: "{{ Value }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_storage_lens_group"
    values={[
        { label: 'update_storage_lens_group', value: 'update_storage_lens_group' }
    ]}
>
<TabItem value="update_storage_lens_group">

Updates the existing Storage Lens group. To use this operation, you must have the permission to perform the s3:UpdateStorageLensGroup action. For more information about the required Storage Lens Groups permissions, see Setting account permissions to use S3 Storage Lens groups. For information about Storage Lens groups errors, see List of Amazon S3 Storage Lens error codes.

```sql
UPDATE aws.s3control.storage_lens_groups
SET 
StorageLensGroup = '{{ StorageLensGroup }}'
WHERE 
name = '{{ name }}' --required
AND `x-amz-account-id` = '{{ x-amz-account-id }}' --required
AND region = '{{ region }}' --required
AND StorageLensGroup = '{{ StorageLensGroup }}' --required;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_storage_lens_group"
    values={[
        { label: 'delete_storage_lens_group', value: 'delete_storage_lens_group' }
    ]}
>
<TabItem value="delete_storage_lens_group">

Deletes an existing S3 Storage Lens group. To use this operation, you must have the permission to perform the s3:DeleteStorageLensGroup action. For more information about the required Storage Lens Groups permissions, see Setting account permissions to use S3 Storage Lens groups. For information about Storage Lens groups errors, see List of Amazon S3 Storage Lens error codes.

```sql
DELETE FROM aws.s3control.storage_lens_groups
WHERE name = '{{ name }}' --required
AND `x-amz-account-id` = '{{ x-amz-account-id }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
