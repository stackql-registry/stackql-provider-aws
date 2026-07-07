--- 
title: delegated_administrators
hide_title: false
hide_table_of_contents: false
keywords:
  - delegated_administrators
  - organizations
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

Creates, updates, deletes, gets or lists a <code>delegated_administrators</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="delegated_administrators" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.organizations.delegated_administrators" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_delegated_administrators"
    values={[
        { label: 'list_delegated_administrators', value: 'list_delegated_administrators' }
    ]}
>
<TabItem value="list_delegated_administrators">

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
    <td><CopyableCode code="Arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the delegated administrator's account. (pattern: &lt;code&gt;^arn:aws:organizations::\d&#123;12&#125;:account\/o-&#91;a-z0-9&#93;&#123;10,32&#125;\/\d&#123;12&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="DelegationEnabledDate" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date when the account was made a delegated administrator.</td>
</tr>
<tr>
    <td><CopyableCode code="Email" /></td>
    <td><code>string</code></td>
    <td>The email address that is associated with the delegated administrator's Amazon Web Services account. (pattern: &lt;code&gt;&#91;^\s@&#93;+@&#91;^\s@&#93;+\.&#91;^\s@&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="Id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier (ID) of the delegated administrator's account. (pattern: &lt;code&gt;^\d&#123;12&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="JoinedMethod" /></td>
    <td><code>string</code></td>
    <td>The method by which the delegated administrator's account joined the organization. (INVITED, CREATED)</td>
</tr>
<tr>
    <td><CopyableCode code="JoinedTimestamp" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date when the delegated administrator's account became a part of the organization.</td>
</tr>
<tr>
    <td><CopyableCode code="Name" /></td>
    <td><code>string</code></td>
    <td>The friendly name of the delegated administrator's account. (pattern: &lt;code&gt;&#91;\s\S&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="State" /></td>
    <td><code>string</code></td>
    <td>Each state represents a specific phase in the account lifecycle. Use this information to manage account access, automate workflows, or trigger actions based on account state changes. For more information about account states and their implications, see Monitor the state of your Amazon Web Services accounts in the Organizations User Guide. (PENDING_ACTIVATION, ACTIVE, SUSPENDED, PENDING_CLOSURE, CLOSED)</td>
</tr>
<tr>
    <td><CopyableCode code="Status" /></td>
    <td><code>string</code></td>
    <td>The status of the delegated administrator's account in the organization. (ACTIVE, SUSPENDED, PENDING_CLOSURE)</td>
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
    <td><a href="#list_delegated_administrators"><CopyableCode code="list_delegated_administrators" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Lists the Amazon Web Services accounts that are designated as delegated administrators in this organization. You can only call this operation from the management account or a member account that is a delegated administrator.</td>
</tr>
<tr>
    <td><a href="#register_delegated_administrator"><CopyableCode code="register_delegated_administrator" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-AccountId"><code>AccountId</code></a>, <a href="#parameter-ServicePrincipal"><code>ServicePrincipal</code></a></td>
    <td></td>
    <td>Enables the specified member account to administer the Organizations features of the specified Amazon Web Services service. It grants read-only access to Organizations service data. The account still requires IAM permissions to access and administer the Amazon Web Services service. You can run this action only for Amazon Web Services services that support this feature. For a current list of services that support it, see the column Supports Delegated Administrator in the table at Amazon Web Services Services that you can use with Organizations in the Organizations User Guide. You can only call this operation from the management account.</td>
</tr>
<tr>
    <td><a href="#deregister_delegated_administrator"><CopyableCode code="deregister_delegated_administrator" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Removes the specified member Amazon Web Services account as a delegated administrator for the specified Amazon Web Services service. Deregistering a delegated administrator can have unintended impacts on the functionality of the enabled Amazon Web Services service. See the documentation for the enabled service before you deregister a delegated administrator so that you understand any potential impacts. You can run this action only for Amazon Web Services services that support this feature. For a current list of services that support it, see the column Supports Delegated Administrator in the table at Amazon Web Services Services that you can use with Organizations in the Organizations User Guide. You can only call this operation from the management account.</td>
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
    defaultValue="list_delegated_administrators"
    values={[
        { label: 'list_delegated_administrators', value: 'list_delegated_administrators' }
    ]}
>
<TabItem value="list_delegated_administrators">

Lists the Amazon Web Services accounts that are designated as delegated administrators in this organization. You can only call this operation from the management account or a member account that is a delegated administrator.

```sql
SELECT
Arn,
DelegationEnabledDate,
Email,
Id,
JoinedMethod,
JoinedTimestamp,
Name,
State,
Status
FROM aws.organizations.delegated_administrators
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="register_delegated_administrator"
    values={[
        { label: 'register_delegated_administrator', value: 'register_delegated_administrator' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="register_delegated_administrator">

Enables the specified member account to administer the Organizations features of the specified Amazon Web Services service. It grants read-only access to Organizations service data. The account still requires IAM permissions to access and administer the Amazon Web Services service. You can run this action only for Amazon Web Services services that support this feature. For a current list of services that support it, see the column Supports Delegated Administrator in the table at Amazon Web Services Services that you can use with Organizations in the Organizations User Guide. You can only call this operation from the management account.

```sql
INSERT INTO aws.organizations.delegated_administrators (
AccountId,
ServicePrincipal,
region
)
SELECT 
'{{ AccountId }}' /* required */,
'{{ ServicePrincipal }}' /* required */,
'{{ region }}'
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: delegated_administrators
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the delegated_administrators resource.
    - name: AccountId
      value: "{{ AccountId }}"
      description: |
        The account ID number of the member account in the organization to register as a delegated administrator.
    - name: ServicePrincipal
      value: "{{ ServicePrincipal }}"
      description: |
        The service principal of the Amazon Web Services service for which you want to make the member account a delegated administrator.
`}</CodeBlock>

</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="deregister_delegated_administrator"
    values={[
        { label: 'deregister_delegated_administrator', value: 'deregister_delegated_administrator' }
    ]}
>
<TabItem value="deregister_delegated_administrator">

Removes the specified member Amazon Web Services account as a delegated administrator for the specified Amazon Web Services service. Deregistering a delegated administrator can have unintended impacts on the functionality of the enabled Amazon Web Services service. See the documentation for the enabled service before you deregister a delegated administrator so that you understand any potential impacts. You can run this action only for Amazon Web Services services that support this feature. For a current list of services that support it, see the column Supports Delegated Administrator in the table at Amazon Web Services Services that you can use with Organizations in the Organizations User Guide. You can only call this operation from the management account.

```sql
DELETE FROM aws.organizations.delegated_administrators
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
