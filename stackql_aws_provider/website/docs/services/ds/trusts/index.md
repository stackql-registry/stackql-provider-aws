--- 
title: trusts
hide_title: false
hide_table_of_contents: false
keywords:
  - trusts
  - ds
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

Creates, updates, deletes, gets or lists a <code>trusts</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="trusts" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.ds.trusts" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_trusts"
    values={[
        { label: 'describe_trusts', value: 'describe_trusts' }
    ]}
>
<TabItem value="describe_trusts">

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
    <td><CopyableCode code="created_date_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time that the trust relationship was created.</td>
</tr>
<tr>
    <td><CopyableCode code="directory_id" /></td>
    <td><code>string</code></td>
    <td>The Directory ID of the Amazon Web Services directory involved in the trust relationship. (pattern: &lt;code&gt;^d-&#91;0-9a-f&#93;&#123;10&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="last_updated_date_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time that the trust relationship was last updated.</td>
</tr>
<tr>
    <td><CopyableCode code="remote_domain_name" /></td>
    <td><code>string</code></td>
    <td>The Fully Qualified Domain Name (FQDN) of the external domain involved in the trust relationship. (pattern: &lt;code&gt;^(&#91;a-zA-Z0-9&#93;+&#91;\\.-&#93;)+(&#91;a-zA-Z0-9&#93;)+&#91;.&#93;?$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="selective_auth" /></td>
    <td><code>string</code></td>
    <td>Current state of selective authentication for the trust. (Enabled, Disabled)</td>
</tr>
<tr>
    <td><CopyableCode code="state_last_updated_date_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time that the TrustState was last updated.</td>
</tr>
<tr>
    <td><CopyableCode code="trust_direction" /></td>
    <td><code>string</code></td>
    <td>The trust relationship direction. (One-Way: Outgoing, One-Way: Incoming, Two-Way)</td>
</tr>
<tr>
    <td><CopyableCode code="trust_id" /></td>
    <td><code>string</code></td>
    <td>The unique ID of the trust relationship. (pattern: &lt;code&gt;^t-&#91;0-9a-f&#93;&#123;10&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="trust_state" /></td>
    <td><code>string</code></td>
    <td>The trust relationship state. (Creating, Created, Verifying, VerifyFailed, Verified, Updating, UpdateFailed, Updated, Deleting, Deleted, Failed)</td>
</tr>
<tr>
    <td><CopyableCode code="trust_state_reason" /></td>
    <td><code>string</code></td>
    <td>The reason for the TrustState.</td>
</tr>
<tr>
    <td><CopyableCode code="trust_type" /></td>
    <td><code>string</code></td>
    <td>The trust relationship type. Forest is the default. (Forest, External)</td>
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
    <td><a href="#describe_trusts"><CopyableCode code="describe_trusts" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Obtains information about the trust relationships for this account. If no input parameters are provided, such as DirectoryId or TrustIds, this request describes all the trust relationships belonging to the account.</td>
</tr>
<tr>
    <td><a href="#create_trust"><CopyableCode code="create_trust" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-DirectoryId"><code>DirectoryId</code></a>, <a href="#parameter-RemoteDomainName"><code>RemoteDomainName</code></a>, <a href="#parameter-TrustPassword"><code>TrustPassword</code></a>, <a href="#parameter-TrustDirection"><code>TrustDirection</code></a></td>
    <td></td>
    <td>Directory Service for Microsoft Active Directory allows you to configure trust relationships. For example, you can establish a trust between your Managed Microsoft AD directory, and your existing self-managed Microsoft Active Directory. This would allow you to provide users and groups access to resources in either domain, with a single set of credentials. This action initiates the creation of the Amazon Web Services side of a trust relationship between an Managed Microsoft AD directory and an external domain. You can create either a forest trust or an external trust.</td>
</tr>
<tr>
    <td><a href="#update_trust"><CopyableCode code="update_trust" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-TrustId"><code>TrustId</code></a></td>
    <td></td>
    <td>Updates the trust that has been set up between your Managed Microsoft AD directory and an self-managed Active Directory.</td>
</tr>
<tr>
    <td><a href="#delete_trust"><CopyableCode code="delete_trust" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes an existing trust relationship between your Managed Microsoft AD directory and an external domain.</td>
</tr>
<tr>
    <td><a href="#verify_trust"><CopyableCode code="verify_trust" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-TrustId"><code>TrustId</code></a></td>
    <td></td>
    <td>Directory Service for Microsoft Active Directory allows you to configure and verify trust relationships. This action verifies a trust relationship between your Managed Microsoft AD directory and an external domain.</td>
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
    defaultValue="describe_trusts"
    values={[
        { label: 'describe_trusts', value: 'describe_trusts' }
    ]}
>
<TabItem value="describe_trusts">

Obtains information about the trust relationships for this account. If no input parameters are provided, such as DirectoryId or TrustIds, this request describes all the trust relationships belonging to the account.

```sql
SELECT
created_date_time,
directory_id,
last_updated_date_time,
remote_domain_name,
selective_auth,
state_last_updated_date_time,
trust_direction,
trust_id,
trust_state,
trust_state_reason,
trust_type
FROM aws.ds.trusts
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_trust"
    values={[
        { label: 'create_trust', value: 'create_trust' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_trust">

Directory Service for Microsoft Active Directory allows you to configure trust relationships. For example, you can establish a trust between your Managed Microsoft AD directory, and your existing self-managed Microsoft Active Directory. This would allow you to provide users and groups access to resources in either domain, with a single set of credentials. This action initiates the creation of the Amazon Web Services side of a trust relationship between an Managed Microsoft AD directory and an external domain. You can create either a forest trust or an external trust.

```sql
INSERT INTO aws.ds.trusts (
DirectoryId,
RemoteDomainName,
TrustPassword,
TrustDirection,
TrustType,
ConditionalForwarderIpAddrs,
ConditionalForwarderIpv6Addrs,
SelectiveAuth,
region
)
SELECT 
'{{ DirectoryId }}' /* required */,
'{{ RemoteDomainName }}' /* required */,
'{{ TrustPassword }}' /* required */,
'{{ TrustDirection }}' /* required */,
'{{ TrustType }}',
'{{ ConditionalForwarderIpAddrs }}',
'{{ ConditionalForwarderIpv6Addrs }}',
'{{ SelectiveAuth }}',
'{{ region }}'
RETURNING
trust_id
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: trusts
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the trusts resource.
    - name: DirectoryId
      value: "{{ DirectoryId }}"
      description: |
        The Directory ID of the Managed Microsoft AD directory for which to establish the trust relationship.
    - name: RemoteDomainName
      value: "{{ RemoteDomainName }}"
      description: |
        The Fully Qualified Domain Name (FQDN) of the external domain for which to create the trust relationship.
    - name: TrustPassword
      value: "{{ TrustPassword }}"
      description: |
        The trust password. The trust password must be the same password that was used when creating the trust relationship on the external domain.
    - name: TrustDirection
      value: "{{ TrustDirection }}"
      description: |
        The direction of the trust relationship.
      valid_values: ['One-Way: Outgoing', 'One-Way: Incoming', 'Two-Way']
    - name: TrustType
      value: "{{ TrustType }}"
      description: |
        The trust relationship type. Forest is the default.
      valid_values: ['Forest', 'External']
    - name: ConditionalForwarderIpAddrs
      value:
        - "{{ ConditionalForwarderIpAddrs }}"
      description: |
        The IP addresses of the remote DNS server associated with RemoteDomainName.
    - name: ConditionalForwarderIpv6Addrs
      value:
        - "{{ ConditionalForwarderIpv6Addrs }}"
      description: |
        The IPv6 addresses of the remote DNS server associated with RemoteDomainName.
    - name: SelectiveAuth
      value: "{{ SelectiveAuth }}"
      description: |
        Optional parameter to enable selective authentication for the trust.
      valid_values: ['Enabled', 'Disabled']
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_trust"
    values={[
        { label: 'update_trust', value: 'update_trust' }
    ]}
>
<TabItem value="update_trust">

Updates the trust that has been set up between your Managed Microsoft AD directory and an self-managed Active Directory.

```sql
UPDATE aws.ds.trusts
SET 
TrustId = '{{ TrustId }}',
SelectiveAuth = '{{ SelectiveAuth }}'
WHERE 
region = '{{ region }}' --required
AND TrustId = '{{ TrustId }}' --required
RETURNING
request_id,
trust_id;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_trust"
    values={[
        { label: 'delete_trust', value: 'delete_trust' }
    ]}
>
<TabItem value="delete_trust">

Deletes an existing trust relationship between your Managed Microsoft AD directory and an external domain.

```sql
DELETE FROM aws.ds.trusts
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="verify_trust"
    values={[
        { label: 'verify_trust', value: 'verify_trust' }
    ]}
>
<TabItem value="verify_trust">

Directory Service for Microsoft Active Directory allows you to configure and verify trust relationships. This action verifies a trust relationship between your Managed Microsoft AD directory and an external domain.

```sql
EXEC aws.ds.trusts.verify_trust 
@region='{{ region }}' --required 
@@json=
'{
"TrustId": "{{ TrustId }}"
}'
;
```
</TabItem>
</Tabs>
