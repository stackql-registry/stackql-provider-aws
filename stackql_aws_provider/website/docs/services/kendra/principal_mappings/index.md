--- 
title: principal_mappings
hide_title: false
hide_table_of_contents: false
keywords:
  - principal_mappings
  - kendra
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

Creates, updates, deletes, gets or lists a <code>principal_mappings</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="principal_mappings" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.kendra.principal_mappings" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_principal_mapping"
    values={[
        { label: 'describe_principal_mapping', value: 'describe_principal_mapping' }
    ]}
>
<TabItem value="describe_principal_mapping">

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
    <td><CopyableCode code="DataSourceId" /></td>
    <td><code>string</code></td>
    <td>Shows the identifier of the data source to see information on the processing of PUT and DELETE actions for mapping users to their groups. (pattern: &lt;code&gt;&#91;a-zA-Z0-9&#93;&#91;a-zA-Z0-9_-&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="GroupId" /></td>
    <td><code>string</code></td>
    <td>Shows the identifier of the group to see information on the processing of PUT and DELETE actions for mapping users to their groups. (pattern: &lt;code&gt;^\P&#123;C&#125;*$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="GroupOrderingIdSummaries" /></td>
    <td><code>array</code></td>
    <td>Shows the following information on the processing of PUT and DELETE actions for mapping users to their groups: Status—the status can be either PROCESSING, SUCCEEDED, DELETING, DELETED, or FAILED. Last updated—the last date-time an action was updated. Received—the last date-time an action was received or submitted. Ordering ID—the latest action that should process and apply after other actions. Failure reason—the reason an action could not be processed.</td>
</tr>
<tr>
    <td><CopyableCode code="IndexId" /></td>
    <td><code>string</code></td>
    <td>Shows the identifier of the index to see information on the processing of PUT and DELETE actions for mapping users to their groups. (pattern: &lt;code&gt;&#91;a-zA-Z0-9&#93;&#91;a-zA-Z0-9-&#93;*&lt;/code&gt;)</td>
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
    <td><a href="#describe_principal_mapping"><CopyableCode code="describe_principal_mapping" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Describes the processing of PUT and DELETE actions for mapping users to their groups. This includes information on the status of actions currently processing or yet to be processed, when actions were last updated, when actions were received by Amazon Kendra, the latest action that should process and apply after other actions, and useful error messages if an action could not be processed. DescribePrincipalMapping is currently not supported in the Amazon Web Services GovCloud (US-West) region.</td>
</tr>
<tr>
    <td><a href="#put_principal_mapping"><CopyableCode code="put_principal_mapping" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-IndexId"><code>IndexId</code></a>, <a href="#parameter-GroupId"><code>GroupId</code></a>, <a href="#parameter-GroupMembers"><code>GroupMembers</code></a></td>
    <td></td>
    <td>Maps users to their groups so that you only need to provide the user ID when you issue the query. You can also map sub groups to groups. For example, the group "Company Intellectual Property Teams" includes sub groups "Research" and "Engineering". These sub groups include their own list of users or people who work in these teams. Only users who work in research and engineering, and therefore belong in the intellectual property group, can see top-secret company documents in their search results. This is useful for user context filtering, where search results are filtered based on the user or their group access to documents. For more information, see Filtering on user context. If more than five PUT actions for a group are currently processing, a validation exception is thrown.</td>
</tr>
<tr>
    <td><a href="#delete_principal_mapping"><CopyableCode code="delete_principal_mapping" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a group so that all users that belong to the group can no longer access documents only available to that group. For example, after deleting the group "Summer Interns", all interns who belonged to that group no longer see intern-only documents in their search results. If you want to delete or replace users or sub groups of a group, you need to use the PutPrincipalMapping operation. For example, if a user in the group "Engineering" leaves the engineering team and another user takes their place, you provide an updated list of users or sub groups that belong to the "Engineering" group when calling PutPrincipalMapping. You can update your internal list of users or sub groups and input this list when calling PutPrincipalMapping. DeletePrincipalMapping is currently not supported in the Amazon Web Services GovCloud (US-West) region.</td>
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
    defaultValue="describe_principal_mapping"
    values={[
        { label: 'describe_principal_mapping', value: 'describe_principal_mapping' }
    ]}
>
<TabItem value="describe_principal_mapping">

Describes the processing of PUT and DELETE actions for mapping users to their groups. This includes information on the status of actions currently processing or yet to be processed, when actions were last updated, when actions were received by Amazon Kendra, the latest action that should process and apply after other actions, and useful error messages if an action could not be processed. DescribePrincipalMapping is currently not supported in the Amazon Web Services GovCloud (US-West) region.

```sql
SELECT
DataSourceId,
GroupId,
GroupOrderingIdSummaries,
IndexId
FROM aws.kendra.principal_mappings
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `REPLACE` examples

<Tabs
    defaultValue="put_principal_mapping"
    values={[
        { label: 'put_principal_mapping', value: 'put_principal_mapping' }
    ]}
>
<TabItem value="put_principal_mapping">

Maps users to their groups so that you only need to provide the user ID when you issue the query. You can also map sub groups to groups. For example, the group "Company Intellectual Property Teams" includes sub groups "Research" and "Engineering". These sub groups include their own list of users or people who work in these teams. Only users who work in research and engineering, and therefore belong in the intellectual property group, can see top-secret company documents in their search results. This is useful for user context filtering, where search results are filtered based on the user or their group access to documents. For more information, see Filtering on user context. If more than five PUT actions for a group are currently processing, a validation exception is thrown.

```sql
REPLACE aws.kendra.principal_mappings
SET 
IndexId = '{{ IndexId }}',
DataSourceId = '{{ DataSourceId }}',
GroupId = '{{ GroupId }}',
GroupMembers = '{{ GroupMembers }}',
OrderingId = {{ OrderingId }},
RoleArn = '{{ RoleArn }}'
WHERE 
region = '{{ region }}' --required
AND IndexId = '{{ IndexId }}' --required
AND GroupId = '{{ GroupId }}' --required
AND GroupMembers = '{{ GroupMembers }}' --required;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_principal_mapping"
    values={[
        { label: 'delete_principal_mapping', value: 'delete_principal_mapping' }
    ]}
>
<TabItem value="delete_principal_mapping">

Deletes a group so that all users that belong to the group can no longer access documents only available to that group. For example, after deleting the group "Summer Interns", all interns who belonged to that group no longer see intern-only documents in their search results. If you want to delete or replace users or sub groups of a group, you need to use the PutPrincipalMapping operation. For example, if a user in the group "Engineering" leaves the engineering team and another user takes their place, you provide an updated list of users or sub groups that belong to the "Engineering" group when calling PutPrincipalMapping. You can update your internal list of users or sub groups and input this list when calling PutPrincipalMapping. DeletePrincipalMapping is currently not supported in the Amazon Web Services GovCloud (US-West) region.

```sql
DELETE FROM aws.kendra.principal_mappings
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
