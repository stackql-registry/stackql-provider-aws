--- 
title: application_assignments
hide_title: false
hide_table_of_contents: false
keywords:
  - application_assignments
  - sso_admin
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

Creates, updates, deletes, gets or lists an <code>application_assignments</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="application_assignments" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.sso_admin.application_assignments" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_application_assignment"
    values={[
        { label: 'describe_application_assignment', value: 'describe_application_assignment' },
        { label: 'list_application_assignments', value: 'list_application_assignments' }
    ]}
>
<TabItem value="describe_application_assignment">

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
    <td><CopyableCode code="ApplicationArn" /></td>
    <td><code>string</code></td>
    <td>Specifies the ARN of the application. For more information about ARNs, see Amazon Resource Names (ARNs) and Amazon Web Services Service Namespaces in the Amazon Web Services General Reference. (pattern: &lt;code&gt;arn:aws(-&#91;a-z&#93;&#123;1,5&#125;)&#123;0,3&#125;:sso::\d&#123;12&#125;:application/(sso)?ins-&#91;a-zA-Z0-9-.&#93;&#123;16&#125;/apl-&#91;a-zA-Z0-9&#93;&#123;16&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="PrincipalId" /></td>
    <td><code>string</code></td>
    <td>An identifier for an object in IAM Identity Center, such as a user or group. PrincipalIds are GUIDs (For example, f81d4fae-7dec-11d0-a765-00a0c91e6bf6). For more information about PrincipalIds in IAM Identity Center, see the IAM Identity Center Identity Store API Reference. (pattern: &lt;code&gt;(&#91;0-9a-f&#93;&#123;10&#125;-|)&#91;A-Fa-f0-9&#93;&#123;8&#125;-&#91;A-Fa-f0-9&#93;&#123;4&#125;-&#91;A-Fa-f0-9&#93;&#123;4&#125;-&#91;A-Fa-f0-9&#93;&#123;4&#125;-&#91;A-Fa-f0-9&#93;&#123;12&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="PrincipalType" /></td>
    <td><code>string</code></td>
    <td>The entity type for which the assignment will be created. (USER, GROUP)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_application_assignments">

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
    <td><CopyableCode code="ApplicationArn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the application that has principals assigned. (pattern: &lt;code&gt;arn:aws(-&#91;a-z&#93;&#123;1,5&#125;)&#123;0,3&#125;:sso::\d&#123;12&#125;:application/(sso)?ins-&#91;a-zA-Z0-9-.&#93;&#123;16&#125;/apl-&#91;a-zA-Z0-9&#93;&#123;16&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="PrincipalId" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the principal assigned to the application. (pattern: &lt;code&gt;(&#91;0-9a-f&#93;&#123;10&#125;-|)&#91;A-Fa-f0-9&#93;&#123;8&#125;-&#91;A-Fa-f0-9&#93;&#123;4&#125;-&#91;A-Fa-f0-9&#93;&#123;4&#125;-&#91;A-Fa-f0-9&#93;&#123;4&#125;-&#91;A-Fa-f0-9&#93;&#123;12&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="PrincipalType" /></td>
    <td><code>string</code></td>
    <td>The type of the principal assigned to the application. (USER, GROUP)</td>
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
    <td><a href="#describe_application_assignment"><CopyableCode code="describe_application_assignment" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves a direct assignment of a user or group to an application. If the user doesn’t have a direct assignment to the application, the user may still have access to the application through a group. Therefore, don’t use this API to test access to an application for a user. Instead use ListApplicationAssignmentsForPrincipal.</td>
</tr>
<tr>
    <td><a href="#list_application_assignments"><CopyableCode code="list_application_assignments" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Lists Amazon Web Services account users that are assigned to an application.</td>
</tr>
<tr>
    <td><a href="#create_application_assignment"><CopyableCode code="create_application_assignment" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-ApplicationArn"><code>ApplicationArn</code></a>, <a href="#parameter-PrincipalId"><code>PrincipalId</code></a>, <a href="#parameter-PrincipalType"><code>PrincipalType</code></a></td>
    <td></td>
    <td>Grant application access to a user or group.</td>
</tr>
<tr>
    <td><a href="#delete_application_assignment"><CopyableCode code="delete_application_assignment" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Revoke application access to an application by deleting application assignments for a user or group.</td>
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
    defaultValue="describe_application_assignment"
    values={[
        { label: 'describe_application_assignment', value: 'describe_application_assignment' },
        { label: 'list_application_assignments', value: 'list_application_assignments' }
    ]}
>
<TabItem value="describe_application_assignment">

Retrieves a direct assignment of a user or group to an application. If the user doesn’t have a direct assignment to the application, the user may still have access to the application through a group. Therefore, don’t use this API to test access to an application for a user. Instead use ListApplicationAssignmentsForPrincipal.

```sql
SELECT
ApplicationArn,
PrincipalId,
PrincipalType
FROM aws.sso_admin.application_assignments
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_application_assignments">

Lists Amazon Web Services account users that are assigned to an application.

```sql
SELECT
ApplicationArn,
PrincipalId,
PrincipalType
FROM aws.sso_admin.application_assignments
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_application_assignment"
    values={[
        { label: 'create_application_assignment', value: 'create_application_assignment' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_application_assignment">

Grant application access to a user or group.

```sql
INSERT INTO aws.sso_admin.application_assignments (
ApplicationArn,
PrincipalId,
PrincipalType,
region
)
SELECT 
'{{ ApplicationArn }}' /* required */,
'{{ PrincipalId }}' /* required */,
'{{ PrincipalType }}' /* required */,
'{{ region }}'
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: application_assignments
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the application_assignments resource.
    - name: ApplicationArn
      value: "{{ ApplicationArn }}"
      description: |
        The ARN of the application for which the assignment is created.
    - name: PrincipalId
      value: "{{ PrincipalId }}"
      description: |
        An identifier for an object in IAM Identity Center, such as a user or group. PrincipalIds are GUIDs (For example, f81d4fae-7dec-11d0-a765-00a0c91e6bf6). For more information about PrincipalIds in IAM Identity Center, see the IAM Identity Center Identity Store API Reference.
    - name: PrincipalType
      value: "{{ PrincipalType }}"
      description: |
        The entity type for which the assignment will be created.
      valid_values: ['USER', 'GROUP']
`}</CodeBlock>

</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_application_assignment"
    values={[
        { label: 'delete_application_assignment', value: 'delete_application_assignment' }
    ]}
>
<TabItem value="delete_application_assignment">

Revoke application access to an application by deleting application assignments for a user or group.

```sql
DELETE FROM aws.sso_admin.application_assignments
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
