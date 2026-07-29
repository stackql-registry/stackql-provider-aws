--- 
title: dataset_groups
hide_title: false
hide_table_of_contents: false
keywords:
  - dataset_groups
  - personalize
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

Creates, updates, deletes, gets or lists a <code>dataset_groups</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="dataset_groups" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.personalize.dataset_groups" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_dataset_group"
    values={[
        { label: 'describe_dataset_group', value: 'describe_dataset_group' },
        { label: 'list_dataset_groups', value: 'list_dataset_groups' }
    ]}
>
<TabItem value="describe_dataset_group">

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
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the dataset group. (pattern: &lt;code&gt;^&#91;a-zA-Z0-9&#93;&#91;a-zA-Z0-9\-_&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="creation_date_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The creation date and time (in Unix time) of the dataset group.</td>
</tr>
<tr>
    <td><CopyableCode code="dataset_group_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the dataset group. (pattern: &lt;code&gt;arn:(&#91;a-z\d-&#93;+):personalize:.*:.*:.+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="domain" /></td>
    <td><code>string</code></td>
    <td>The domain of a Domain dataset group. (ECOMMERCE, VIDEO_ON_DEMAND)</td>
</tr>
<tr>
    <td><CopyableCode code="failure_reason" /></td>
    <td><code>string</code></td>
    <td>If creating a dataset group fails, provides the reason why.</td>
</tr>
<tr>
    <td><CopyableCode code="kms_key_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the Key Management Service (KMS) key used to encrypt the datasets. (pattern: &lt;code&gt;arn:aws.*:kms:.*:&#91;0-9&#93;&#123;12&#125;:key/.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="last_updated_date_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The last update date and time (in Unix time) of the dataset group.</td>
</tr>
<tr>
    <td><CopyableCode code="role_arn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the Identity and Access Management (IAM) role that has permissions to access the Key Management Service (KMS) key. Supplying an IAM role is only valid when also specifying a KMS key. (pattern: &lt;code&gt;arn:(&#91;a-z\d-&#93;+):iam::\d&#123;12&#125;:role/?&#91;a-zA-Z_0-9+=,.@\-_/&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The current status of the dataset group. A dataset group can be in one of the following states: CREATE PENDING &gt; CREATE IN_PROGRESS &gt; ACTIVE -or- CREATE FAILED DELETE PENDING</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_dataset_groups">

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
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the dataset group. (pattern: &lt;code&gt;^&#91;a-zA-Z0-9&#93;&#91;a-zA-Z0-9\-_&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="creation_date_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time (in Unix time) that the dataset group was created.</td>
</tr>
<tr>
    <td><CopyableCode code="dataset_group_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the dataset group. (pattern: &lt;code&gt;arn:(&#91;a-z\d-&#93;+):personalize:.*:.*:.+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="domain" /></td>
    <td><code>string</code></td>
    <td>The domain of a Domain dataset group. (ECOMMERCE, VIDEO_ON_DEMAND)</td>
</tr>
<tr>
    <td><CopyableCode code="failure_reason" /></td>
    <td><code>string</code></td>
    <td>If creating a dataset group fails, the reason behind the failure.</td>
</tr>
<tr>
    <td><CopyableCode code="last_updated_date_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time (in Unix time) that the dataset group was last updated.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The status of the dataset group. A dataset group can be in one of the following states: CREATE PENDING &gt; CREATE IN_PROGRESS &gt; ACTIVE -or- CREATE FAILED DELETE PENDING</td>
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
    <td><a href="#describe_dataset_group"><CopyableCode code="describe_dataset_group" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Describes the given dataset group. For more information on dataset groups, see CreateDatasetGroup.</td>
</tr>
<tr>
    <td><a href="#list_dataset_groups"><CopyableCode code="list_dataset_groups" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns a list of dataset groups. The response provides the properties for each dataset group, including the Amazon Resource Name (ARN). For more information on dataset groups, see CreateDatasetGroup.</td>
</tr>
<tr>
    <td><a href="#create_dataset_group"><CopyableCode code="create_dataset_group" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-name"><code>name</code></a></td>
    <td></td>
    <td>Creates an empty dataset group. A dataset group is a container for Amazon Personalize resources. A dataset group can contain at most three datasets, one for each type of dataset: Item interactions Items Users Actions Action interactions A dataset group can be a Domain dataset group, where you specify a domain and use pre-configured resources like recommenders, or a Custom dataset group, where you use custom resources, such as a solution with a solution version, that you deploy with a campaign. If you start with a Domain dataset group, you can still add custom resources such as solutions and solution versions trained with recipes for custom use cases and deployed with campaigns. A dataset group can be in one of the following states: CREATE PENDING &gt; CREATE IN_PROGRESS &gt; ACTIVE -or- CREATE FAILED DELETE PENDING To get the status of the dataset group, call DescribeDatasetGroup. If the status shows as CREATE FAILED, the response includes a failureReason key, which describes why the creation failed. You must wait until the status of the dataset group is ACTIVE before adding a dataset to the group. You can specify an Key Management Service (KMS) key to encrypt the datasets in the group. If you specify a KMS key, you must also include an Identity and Access Management (IAM) role that has permission to access the key. APIs that require a dataset group ARN in the request CreateDataset CreateEventTracker CreateSolution Related APIs ListDatasetGroups DescribeDatasetGroup DeleteDatasetGroup</td>
</tr>
<tr>
    <td><a href="#delete_dataset_group"><CopyableCode code="delete_dataset_group" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a dataset group. Before you delete a dataset group, you must delete the following: All associated event trackers. All associated solutions. All datasets in the dataset group.</td>
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
    defaultValue="describe_dataset_group"
    values={[
        { label: 'describe_dataset_group', value: 'describe_dataset_group' },
        { label: 'list_dataset_groups', value: 'list_dataset_groups' }
    ]}
>
<TabItem value="describe_dataset_group">

Describes the given dataset group. For more information on dataset groups, see CreateDatasetGroup.

```sql
SELECT
name,
creation_date_time,
dataset_group_arn,
domain,
failure_reason,
kms_key_arn,
last_updated_date_time,
role_arn,
status
FROM aws.personalize.dataset_groups
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_dataset_groups">

Returns a list of dataset groups. The response provides the properties for each dataset group, including the Amazon Resource Name (ARN). For more information on dataset groups, see CreateDatasetGroup.

```sql
SELECT
name,
creation_date_time,
dataset_group_arn,
domain,
failure_reason,
last_updated_date_time,
status
FROM aws.personalize.dataset_groups
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_dataset_group"
    values={[
        { label: 'create_dataset_group', value: 'create_dataset_group' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_dataset_group">

Creates an empty dataset group. A dataset group is a container for Amazon Personalize resources. A dataset group can contain at most three datasets, one for each type of dataset: Item interactions Items Users Actions Action interactions A dataset group can be a Domain dataset group, where you specify a domain and use pre-configured resources like recommenders, or a Custom dataset group, where you use custom resources, such as a solution with a solution version, that you deploy with a campaign. If you start with a Domain dataset group, you can still add custom resources such as solutions and solution versions trained with recipes for custom use cases and deployed with campaigns. A dataset group can be in one of the following states: CREATE PENDING &gt; CREATE IN_PROGRESS &gt; ACTIVE -or- CREATE FAILED DELETE PENDING To get the status of the dataset group, call DescribeDatasetGroup. If the status shows as CREATE FAILED, the response includes a failureReason key, which describes why the creation failed. You must wait until the status of the dataset group is ACTIVE before adding a dataset to the group. You can specify an Key Management Service (KMS) key to encrypt the datasets in the group. If you specify a KMS key, you must also include an Identity and Access Management (IAM) role that has permission to access the key. APIs that require a dataset group ARN in the request CreateDataset CreateEventTracker CreateSolution Related APIs ListDatasetGroups DescribeDatasetGroup DeleteDatasetGroup

```sql
INSERT INTO aws.personalize.dataset_groups (
name,
roleArn,
kmsKeyArn,
domain,
tags,
region
)
SELECT 
'{{ name }}' /* required */,
'{{ roleArn }}',
'{{ kmsKeyArn }}',
'{{ domain }}',
'{{ tags }}',
'{{ region }}'
RETURNING
dataset_group_arn,
domain
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: dataset_groups
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the dataset_groups resource.
    - name: name
      value: "{{ name }}"
      description: |
        The name for the new dataset group.
    - name: roleArn
      value: "{{ roleArn }}"
      description: |
        The ARN of the Identity and Access Management (IAM) role that has permissions to access the Key Management Service (KMS) key. Supplying an IAM role is only valid when also specifying a KMS key.
    - name: kmsKeyArn
      value: "{{ kmsKeyArn }}"
      description: |
        The Amazon Resource Name (ARN) of a Key Management Service (KMS) key used to encrypt the datasets.
    - name: domain
      value: "{{ domain }}"
      description: |
        The domain of the dataset group. Specify a domain to create a Domain dataset group. The domain you specify determines the default schemas for datasets and the use cases available for recommenders. If you don't specify a domain, you create a Custom dataset group with solution versions that you deploy with a campaign.
      valid_values: ['ECOMMERCE', 'VIDEO_ON_DEMAND']
    - name: tags
      description: |
        A list of tags to apply to the dataset group.
      value:
        - tagKey: "{{ tagKey }}"
          tagValue: "{{ tagValue }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_dataset_group"
    values={[
        { label: 'delete_dataset_group', value: 'delete_dataset_group' }
    ]}
>
<TabItem value="delete_dataset_group">

Deletes a dataset group. Before you delete a dataset group, you must delete the following: All associated event trackers. All associated solutions. All datasets in the dataset group.

```sql
DELETE FROM aws.personalize.dataset_groups
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
