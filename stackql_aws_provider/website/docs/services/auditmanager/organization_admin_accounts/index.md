--- 
title: organization_admin_accounts
hide_title: false
hide_table_of_contents: false
keywords:
  - organization_admin_accounts
  - auditmanager
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

Creates, updates, deletes, gets or lists an <code>organization_admin_accounts</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="organization_admin_accounts" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.auditmanager.organization_admin_accounts" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_organization_admin_account"
    values={[
        { label: 'get_organization_admin_account', value: 'get_organization_admin_account' }
    ]}
>
<TabItem value="get_organization_admin_account">

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
    <td><CopyableCode code="admin_account_id" /></td>
    <td><code>string</code></td>
    <td>The identifier for the administrator account. (pattern: &lt;code&gt;^&#91;0-9&#93;&#123;12&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="organization_id" /></td>
    <td><code>string</code></td>
    <td>The identifier for the organization. (pattern: &lt;code&gt;o-&#91;a-z0-9&#93;&#123;10,32&#125;&lt;/code&gt;)</td>
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
    <td><a href="#get_organization_admin_account"><CopyableCode code="get_organization_admin_account" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets the name of the delegated Amazon Web Services administrator account for a specified organization.</td>
</tr>
<tr>
    <td><a href="#register_organization_admin_account"><CopyableCode code="register_organization_admin_account" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-adminAccountId"><code>adminAccountId</code></a></td>
    <td></td>
    <td>Enables an Amazon Web Services account within the organization as the delegated administrator for Audit Manager.</td>
</tr>
<tr>
    <td><a href="#deregister_organization_admin_account"><CopyableCode code="deregister_organization_admin_account" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Removes the specified Amazon Web Services account as a delegated administrator for Audit Manager. When you remove a delegated administrator from your Audit Manager settings, you continue to have access to the evidence that you previously collected under that account. This is also the case when you deregister a delegated administrator from Organizations. However, Audit Manager stops collecting and attaching evidence to that delegated administrator account moving forward. Keep in mind the following cleanup task if you use evidence finder: Before you use your management account to remove a delegated administrator, make sure that the current delegated administrator account signs in to Audit Manager and disables evidence finder first. Disabling evidence finder automatically deletes the event data store that was created in their account when they enabled evidence finder. If this task isn’t completed, the event data store remains in their account. In this case, we recommend that the original delegated administrator goes to CloudTrail Lake and manually deletes the event data store. This cleanup task is necessary to ensure that you don't end up with multiple event data stores. Audit Manager ignores an unused event data store after you remove or change a delegated administrator account. However, the unused event data store continues to incur storage costs from CloudTrail Lake if you don't delete it. When you deregister a delegated administrator account for Audit Manager, the data for that account isn’t deleted. If you want to delete resource data for a delegated administrator account, you must perform that task separately before you deregister the account. Either, you can do this in the Audit Manager console. Or, you can use one of the delete API operations that are provided by Audit Manager. To delete your Audit Manager resource data, see the following instructions: DeleteAssessment (see also: Deleting an assessment in the Audit Manager User Guide) DeleteAssessmentFramework (see also: Deleting a custom framework in the Audit Manager User Guide) DeleteAssessmentFrameworkShare (see also: Deleting a share request in the Audit Manager User Guide) DeleteAssessmentReport (see also: Deleting an assessment report in the Audit Manager User Guide) DeleteControl (see also: Deleting a custom control in the Audit Manager User Guide) At this time, Audit Manager doesn't provide an option to delete evidence for a specific delegated administrator. Instead, when your management account deregisters Audit Manager, we perform a cleanup for the current delegated administrator account at the time of deregistration.</td>
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
    defaultValue="get_organization_admin_account"
    values={[
        { label: 'get_organization_admin_account', value: 'get_organization_admin_account' }
    ]}
>
<TabItem value="get_organization_admin_account">

Gets the name of the delegated Amazon Web Services administrator account for a specified organization.

```sql
SELECT
admin_account_id,
organization_id
FROM aws.auditmanager.organization_admin_accounts
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="register_organization_admin_account"
    values={[
        { label: 'register_organization_admin_account', value: 'register_organization_admin_account' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="register_organization_admin_account">

Enables an Amazon Web Services account within the organization as the delegated administrator for Audit Manager.

```sql
INSERT INTO aws.auditmanager.organization_admin_accounts (
adminAccountId,
region
)
SELECT 
'{{ adminAccountId }}' /* required */,
'{{ region }}'
RETURNING
admin_account_id,
organization_id
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: organization_admin_accounts
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the organization_admin_accounts resource.
    - name: adminAccountId
      value: "{{ adminAccountId }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="deregister_organization_admin_account"
    values={[
        { label: 'deregister_organization_admin_account', value: 'deregister_organization_admin_account' }
    ]}
>
<TabItem value="deregister_organization_admin_account">

Removes the specified Amazon Web Services account as a delegated administrator for Audit Manager. When you remove a delegated administrator from your Audit Manager settings, you continue to have access to the evidence that you previously collected under that account. This is also the case when you deregister a delegated administrator from Organizations. However, Audit Manager stops collecting and attaching evidence to that delegated administrator account moving forward. Keep in mind the following cleanup task if you use evidence finder: Before you use your management account to remove a delegated administrator, make sure that the current delegated administrator account signs in to Audit Manager and disables evidence finder first. Disabling evidence finder automatically deletes the event data store that was created in their account when they enabled evidence finder. If this task isn’t completed, the event data store remains in their account. In this case, we recommend that the original delegated administrator goes to CloudTrail Lake and manually deletes the event data store. This cleanup task is necessary to ensure that you don't end up with multiple event data stores. Audit Manager ignores an unused event data store after you remove or change a delegated administrator account. However, the unused event data store continues to incur storage costs from CloudTrail Lake if you don't delete it. When you deregister a delegated administrator account for Audit Manager, the data for that account isn’t deleted. If you want to delete resource data for a delegated administrator account, you must perform that task separately before you deregister the account. Either, you can do this in the Audit Manager console. Or, you can use one of the delete API operations that are provided by Audit Manager. To delete your Audit Manager resource data, see the following instructions: DeleteAssessment (see also: Deleting an assessment in the Audit Manager User Guide) DeleteAssessmentFramework (see also: Deleting a custom framework in the Audit Manager User Guide) DeleteAssessmentFrameworkShare (see also: Deleting a share request in the Audit Manager User Guide) DeleteAssessmentReport (see also: Deleting an assessment report in the Audit Manager User Guide) DeleteControl (see also: Deleting a custom control in the Audit Manager User Guide) At this time, Audit Manager doesn't provide an option to delete evidence for a specific delegated administrator. Instead, when your management account deregisters Audit Manager, we perform a cleanup for the current delegated administrator account at the time of deregistration.

```sql
DELETE FROM aws.auditmanager.organization_admin_accounts
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
