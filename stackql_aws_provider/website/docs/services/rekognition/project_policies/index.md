--- 
title: project_policies
hide_title: false
hide_table_of_contents: false
keywords:
  - project_policies
  - rekognition
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

Creates, updates, deletes, gets or lists a <code>project_policies</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="project_policies" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.rekognition.project_policies" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_project_policies"
    values={[
        { label: 'list_project_policies', value: 'list_project_policies' }
    ]}
>
<TabItem value="list_project_policies">

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
    <td><CopyableCode code="creation_timestamp" /></td>
    <td><code>string (date-time)</code></td>
    <td>The Unix datetime for the creation of the project policy.</td>
</tr>
<tr>
    <td><CopyableCode code="last_updated_timestamp" /></td>
    <td><code>string (date-time)</code></td>
    <td>The Unix datetime for when the project policy was last updated.</td>
</tr>
<tr>
    <td><CopyableCode code="policy_document" /></td>
    <td><code>string</code></td>
    <td>The JSON document for the project policy. (pattern: &lt;code&gt;&#91;\u0009\u000A\u000D\u0020-\u00FF&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="policy_name" /></td>
    <td><code>string</code></td>
    <td>The name of the project policy. (pattern: &lt;code&gt;&#91;a-zA-Z0-9_.\-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="policy_revision_id" /></td>
    <td><code>string</code></td>
    <td>The revision ID of the project policy. (pattern: &lt;code&gt;&#91;0-9A-Fa-f&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="project_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the project to which the project policy is attached. (pattern: &lt;code&gt;(^arn:&#91;a-z\d-&#93;+:rekognition:&#91;a-z\d-&#93;+:\d&#123;12&#125;:project\/&#91;a-zA-Z0-9_.\-&#93;&#123;1,255&#125;\/&#91;0-9&#93;+$)&lt;/code&gt;)</td>
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
    <td><a href="#list_project_policies"><CopyableCode code="list_project_policies" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>This operation applies only to Amazon Rekognition Custom Labels. Gets a list of the project policies attached to a project. To attach a project policy to a project, call PutProjectPolicy. To remove a project policy from a project, call DeleteProjectPolicy. This operation requires permissions to perform the rekognition:ListProjectPolicies action.</td>
</tr>
<tr>
    <td><a href="#put_project_policy"><CopyableCode code="put_project_policy" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-ProjectArn"><code>ProjectArn</code></a>, <a href="#parameter-PolicyName"><code>PolicyName</code></a>, <a href="#parameter-PolicyDocument"><code>PolicyDocument</code></a></td>
    <td></td>
    <td>This operation applies only to Amazon Rekognition Custom Labels. Attaches a project policy to a Amazon Rekognition Custom Labels project in a trusting AWS account. A project policy specifies that a trusted AWS account can copy a model version from a trusting AWS account to a project in the trusted AWS account. To copy a model version you use the CopyProjectVersion operation. Only applies to Custom Labels projects. For more information about the format of a project policy document, see Attaching a project policy (SDK) in the Amazon Rekognition Custom Labels Developer Guide. The response from PutProjectPolicy is a revision ID for the project policy. You can attach multiple project policies to a project. You can also update an existing project policy by specifying the policy revision ID of the existing policy. To remove a project policy from a project, call DeleteProjectPolicy. To get a list of project policies attached to a project, call ListProjectPolicies. You copy a model version by calling CopyProjectVersion. This operation requires permissions to perform the rekognition:PutProjectPolicy action.</td>
</tr>
<tr>
    <td><a href="#delete_project_policy"><CopyableCode code="delete_project_policy" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>This operation applies only to Amazon Rekognition Custom Labels. Deletes an existing project policy. To get a list of project policies attached to a project, call ListProjectPolicies. To attach a project policy to a project, call PutProjectPolicy. This operation requires permissions to perform the rekognition:DeleteProjectPolicy action.</td>
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
    defaultValue="list_project_policies"
    values={[
        { label: 'list_project_policies', value: 'list_project_policies' }
    ]}
>
<TabItem value="list_project_policies">

This operation applies only to Amazon Rekognition Custom Labels. Gets a list of the project policies attached to a project. To attach a project policy to a project, call PutProjectPolicy. To remove a project policy from a project, call DeleteProjectPolicy. This operation requires permissions to perform the rekognition:ListProjectPolicies action.

```sql
SELECT
creation_timestamp,
last_updated_timestamp,
policy_document,
policy_name,
policy_revision_id,
project_arn
FROM aws.rekognition.project_policies
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `REPLACE` examples

<Tabs
    defaultValue="put_project_policy"
    values={[
        { label: 'put_project_policy', value: 'put_project_policy' }
    ]}
>
<TabItem value="put_project_policy">

This operation applies only to Amazon Rekognition Custom Labels. Attaches a project policy to a Amazon Rekognition Custom Labels project in a trusting AWS account. A project policy specifies that a trusted AWS account can copy a model version from a trusting AWS account to a project in the trusted AWS account. To copy a model version you use the CopyProjectVersion operation. Only applies to Custom Labels projects. For more information about the format of a project policy document, see Attaching a project policy (SDK) in the Amazon Rekognition Custom Labels Developer Guide. The response from PutProjectPolicy is a revision ID for the project policy. You can attach multiple project policies to a project. You can also update an existing project policy by specifying the policy revision ID of the existing policy. To remove a project policy from a project, call DeleteProjectPolicy. To get a list of project policies attached to a project, call ListProjectPolicies. You copy a model version by calling CopyProjectVersion. This operation requires permissions to perform the rekognition:PutProjectPolicy action.

```sql
REPLACE aws.rekognition.project_policies
SET 
ProjectArn = '{{ ProjectArn }}',
PolicyName = '{{ PolicyName }}',
PolicyRevisionId = '{{ PolicyRevisionId }}',
PolicyDocument = '{{ PolicyDocument }}'
WHERE 
region = '{{ region }}' --required
AND ProjectArn = '{{ ProjectArn }}' --required
AND PolicyName = '{{ PolicyName }}' --required
AND PolicyDocument = '{{ PolicyDocument }}' --required
RETURNING
policy_revision_id;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_project_policy"
    values={[
        { label: 'delete_project_policy', value: 'delete_project_policy' }
    ]}
>
<TabItem value="delete_project_policy">

This operation applies only to Amazon Rekognition Custom Labels. Deletes an existing project policy. To get a list of project policies attached to a project, call ListProjectPolicies. To attach a project policy to a project, call PutProjectPolicy. This operation requires permissions to perform the rekognition:DeleteProjectPolicy action.

```sql
DELETE FROM aws.rekognition.project_policies
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
