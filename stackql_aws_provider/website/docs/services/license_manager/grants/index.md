--- 
title: grants
hide_title: false
hide_table_of_contents: false
keywords:
  - grants
  - license_manager
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

Creates, updates, deletes, gets or lists a <code>grants</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="grants" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.license_manager.grants" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_grant"
    values={[
        { label: 'get_grant', value: 'get_grant' }
    ]}
>
<TabItem value="get_grant">

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
    <td><CopyableCode code="grant_arn" /></td>
    <td><code>string</code></td>
    <td>Amazon Resource Name (ARN) of the grant. (pattern: &lt;code&gt;^arn:aws&#91;a-zA-Z-&#93;*:&#91;A-Za-z0-9&#93;&#91;A-Za-z0-9_/.-&#93;&#123;0,62&#125;:&#91;A-Za-z0-9_/.-&#93;&#123;0,63&#125;:&#91;A-Za-z0-9_/.-&#93;&#123;0,63&#125;:&#91;A-Za-z0-9&#93;&#91;A-Za-z0-9:_/+=,@.-&#93;&#123;0,1023&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="grant_name" /></td>
    <td><code>string</code></td>
    <td>Grant name.</td>
</tr>
<tr>
    <td><CopyableCode code="grant_status" /></td>
    <td><code>string</code></td>
    <td>Grant status. (PENDING_WORKFLOW, PENDING_ACCEPT, REJECTED, ACTIVE, FAILED_WORKFLOW, DELETED, PENDING_DELETE, DISABLED, WORKFLOW_COMPLETED)</td>
</tr>
<tr>
    <td><CopyableCode code="granted_operations" /></td>
    <td><code>array</code></td>
    <td>Granted operations.</td>
</tr>
<tr>
    <td><CopyableCode code="grantee_principal_arn" /></td>
    <td><code>string</code></td>
    <td>The grantee principal ARN. (pattern: &lt;code&gt;^arn:aws&#91;a-zA-Z-&#93;*:&#91;A-Za-z0-9&#93;&#91;A-Za-z0-9_/.-&#93;&#123;0,62&#125;:&#91;A-Za-z0-9_/.-&#93;&#123;0,63&#125;:&#91;A-Za-z0-9_/.-&#93;&#123;0,63&#125;:&#91;A-Za-z0-9&#93;&#91;A-Za-z0-9:_/+=,@.-&#93;&#123;0,1023&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="home_region" /></td>
    <td><code>string</code></td>
    <td>Home Region of the grant.</td>
</tr>
<tr>
    <td><CopyableCode code="license_arn" /></td>
    <td><code>string</code></td>
    <td>License ARN. (pattern: &lt;code&gt;^arn:aws&#91;a-zA-Z-&#93;*:&#91;A-Za-z0-9&#93;&#91;A-Za-z0-9_/.-&#93;&#123;0,62&#125;:&#91;A-Za-z0-9_/.-&#93;&#123;0,63&#125;:&#91;A-Za-z0-9_/.-&#93;&#123;0,63&#125;:&#91;A-Za-z0-9&#93;&#91;A-Za-z0-9:_/+=,@.-&#93;&#123;0,1023&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="options" /></td>
    <td><code>object</code></td>
    <td>The options specified for the grant.</td>
</tr>
<tr>
    <td><CopyableCode code="parent_arn" /></td>
    <td><code>string</code></td>
    <td>Parent ARN. (pattern: &lt;code&gt;^arn:aws&#91;a-zA-Z-&#93;*:&#91;A-Za-z0-9&#93;&#91;A-Za-z0-9_/.-&#93;&#123;0,62&#125;:&#91;A-Za-z0-9_/.-&#93;&#123;0,63&#125;:&#91;A-Za-z0-9_/.-&#93;&#123;0,63&#125;:&#91;A-Za-z0-9&#93;&#91;A-Za-z0-9:_/+=,@.-&#93;&#123;0,1023&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="status_reason" /></td>
    <td><code>string</code></td>
    <td>Grant status reason. (pattern: &lt;code&gt;&#91;\s\S&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="version" /></td>
    <td><code>string</code></td>
    <td>Grant version.</td>
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
    <td><a href="#get_grant"><CopyableCode code="get_grant" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets detailed information about the specified grant.</td>
</tr>
<tr>
    <td><a href="#create_grant"><CopyableCode code="create_grant" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-ClientToken"><code>ClientToken</code></a>, <a href="#parameter-GrantName"><code>GrantName</code></a>, <a href="#parameter-LicenseArn"><code>LicenseArn</code></a>, <a href="#parameter-Principals"><code>Principals</code></a>, <a href="#parameter-HomeRegion"><code>HomeRegion</code></a>, <a href="#parameter-AllowedOperations"><code>AllowedOperations</code></a></td>
    <td></td>
    <td>Creates a grant for the specified license. A grant shares the use of license entitlements with a specific Amazon Web Services account, an organization, or an organizational unit (OU). For more information, see Granted licenses in License Manager in the License Manager User Guide.</td>
</tr>
<tr>
    <td><a href="#create_grant_version"><CopyableCode code="create_grant_version" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-ClientToken"><code>ClientToken</code></a>, <a href="#parameter-GrantArn"><code>GrantArn</code></a></td>
    <td></td>
    <td>Creates a new version of the specified grant. For more information, see Granted licenses in License Manager in the License Manager User Guide.</td>
</tr>
<tr>
    <td><a href="#delete_grant"><CopyableCode code="delete_grant" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes the specified grant.</td>
</tr>
<tr>
    <td><a href="#accept_grant"><CopyableCode code="accept_grant" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-GrantArn"><code>GrantArn</code></a></td>
    <td></td>
    <td>Accepts the specified grant.</td>
</tr>
<tr>
    <td><a href="#reject_grant"><CopyableCode code="reject_grant" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-GrantArn"><code>GrantArn</code></a></td>
    <td></td>
    <td>Rejects the specified grant.</td>
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
    defaultValue="get_grant"
    values={[
        { label: 'get_grant', value: 'get_grant' }
    ]}
>
<TabItem value="get_grant">

Gets detailed information about the specified grant.

```sql
SELECT
grant_arn,
grant_name,
grant_status,
granted_operations,
grantee_principal_arn,
home_region,
license_arn,
options,
parent_arn,
status_reason,
version
FROM aws.license_manager.grants
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_grant"
    values={[
        { label: 'create_grant', value: 'create_grant' },
        { label: 'create_grant_version', value: 'create_grant_version' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_grant">

Creates a grant for the specified license. A grant shares the use of license entitlements with a specific Amazon Web Services account, an organization, or an organizational unit (OU). For more information, see Granted licenses in License Manager in the License Manager User Guide.

```sql
INSERT INTO aws.license_manager.grants (
ClientToken,
GrantName,
LicenseArn,
Principals,
HomeRegion,
AllowedOperations,
Tags,
region
)
SELECT 
'{{ ClientToken }}' /* required */,
'{{ GrantName }}' /* required */,
'{{ LicenseArn }}' /* required */,
'{{ Principals }}' /* required */,
'{{ HomeRegion }}' /* required */,
'{{ AllowedOperations }}' /* required */,
'{{ Tags }}',
'{{ region }}'
RETURNING
grant_arn,
status,
version
;
```
</TabItem>
<TabItem value="create_grant_version">

Creates a new version of the specified grant. For more information, see Granted licenses in License Manager in the License Manager User Guide.

```sql
INSERT INTO aws.license_manager.grants (
ClientToken,
GrantArn,
GrantName,
AllowedOperations,
Status,
StatusReason,
SourceVersion,
Options,
region
)
SELECT 
'{{ ClientToken }}' /* required */,
'{{ GrantArn }}' /* required */,
'{{ GrantName }}',
'{{ AllowedOperations }}',
'{{ Status }}',
'{{ StatusReason }}',
'{{ SourceVersion }}',
'{{ Options }}',
'{{ region }}'
RETURNING
grant_arn,
status,
version
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: grants
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the grants resource.
    - name: ClientToken
      value: "{{ ClientToken }}"
      description: |
        Unique, case-sensitive identifier that you provide to ensure the idempotency of the request.
    - name: GrantName
      value: "{{ GrantName }}"
      description: |
        Grant name.
    - name: LicenseArn
      value: "{{ LicenseArn }}"
      description: |
        Amazon Resource Name (ARN) of the license.
    - name: Principals
      value:
        - "{{ Principals }}"
      description: |
        The grant principals. You can specify one of the following as an Amazon Resource Name (ARN): An Amazon Web Services account, which includes only the account specified. An organizational unit (OU), which includes all accounts in the OU. An organization, which will include all accounts across your organization.
    - name: HomeRegion
      value: "{{ HomeRegion }}"
      description: |
        Home Region of the grant.
    - name: AllowedOperations
      value:
        - "{{ AllowedOperations }}"
      description: |
        Allowed operations for the grant.
    - name: Tags
      description: |
        Tags to add to the grant. For more information about tagging support in License Manager, see the TagResource operation.
      value:
        - Key: "{{ Key }}"
          Value: "{{ Value }}"
    - name: GrantArn
      value: "{{ GrantArn }}"
      description: |
        Amazon Resource Name (ARN) of the grant.
    - name: Status
      value: "{{ Status }}"
      description: |
        Grant status.
      valid_values: ['PENDING_WORKFLOW', 'PENDING_ACCEPT', 'REJECTED', 'ACTIVE', 'FAILED_WORKFLOW', 'DELETED', 'PENDING_DELETE', 'DISABLED', 'WORKFLOW_COMPLETED']
    - name: StatusReason
      value: "{{ StatusReason }}"
      description: |
        Grant status reason.
    - name: SourceVersion
      value: "{{ SourceVersion }}"
      description: |
        Current version of the grant.
    - name: Options
      description: |
        The options specified for the grant.
      value:
        ActivationOverrideBehavior: "{{ ActivationOverrideBehavior }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_grant"
    values={[
        { label: 'delete_grant', value: 'delete_grant' }
    ]}
>
<TabItem value="delete_grant">

Deletes the specified grant.

```sql
DELETE FROM aws.license_manager.grants
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="accept_grant"
    values={[
        { label: 'accept_grant', value: 'accept_grant' },
        { label: 'reject_grant', value: 'reject_grant' }
    ]}
>
<TabItem value="accept_grant">

Accepts the specified grant.

```sql
EXEC aws.license_manager.grants.accept_grant 
@region='{{ region }}' --required 
@@json=
'{
"GrantArn": "{{ GrantArn }}"
}'
;
```
</TabItem>
<TabItem value="reject_grant">

Rejects the specified grant.

```sql
EXEC aws.license_manager.grants.reject_grant 
@region='{{ region }}' --required 
@@json=
'{
"GrantArn": "{{ GrantArn }}"
}'
;
```
</TabItem>
</Tabs>
