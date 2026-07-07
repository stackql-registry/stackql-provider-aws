--- 
title: permissions
hide_title: false
hide_table_of_contents: false
keywords:
  - permissions
  - acm_pca
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

Creates, updates, deletes, gets or lists a <code>permissions</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="permissions" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.acm_pca.permissions" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_permissions"
    values={[
        { label: 'list_permissions', value: 'list_permissions' }
    ]}
>
<TabItem value="list_permissions">

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
    <td><CopyableCode code="Actions" /></td>
    <td><code>array</code></td>
    <td>The private CA actions that can be performed by the designated Amazon Web Services service.</td>
</tr>
<tr>
    <td><CopyableCode code="CertificateAuthorityArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Number (ARN) of the private CA from which the permission was issued. (pattern: &lt;code&gt;arn:&#91;\w+=/,.@-&#93;+:acm-pca:&#91;\w+=/,.@-&#93;*:&#91;0-9&#93;*:&#91;\w+=,.@-&#93;+(/&#91;\w+=,.@-&#93;+)*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="CreatedAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time at which the permission was created.</td>
</tr>
<tr>
    <td><CopyableCode code="Policy" /></td>
    <td><code>string</code></td>
    <td>The name of the policy that is associated with the permission. (pattern: &lt;code&gt;&#91;\u0009\u000A\u000D\u0020-\u00FF&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="Principal" /></td>
    <td><code>string</code></td>
    <td>The Amazon Web Services service or entity that holds the permission. At this time, the only valid principal is acm.amazonaws.com. (pattern: &lt;code&gt;&#91;^*&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="SourceAccount" /></td>
    <td><code>string</code></td>
    <td>The ID of the account that assigned the permission. (pattern: &lt;code&gt;&#91;0-9&#93;+&lt;/code&gt;)</td>
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
    <td><a href="#list_permissions"><CopyableCode code="list_permissions" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>List all permissions on a private CA, if any, granted to the Certificate Manager (ACM) service principal (acm.amazonaws.com). These permissions allow ACM to issue and renew ACM certificates that reside in the same Amazon Web Services account as the CA. Permissions can be granted with the CreatePermission action and revoked with the DeletePermission action. About Permissions If the private CA and the certificates it issues reside in the same account, you can use CreatePermission to grant permissions for ACM to carry out automatic certificate renewals. For automatic certificate renewal to succeed, the ACM service principal needs permissions to create, retrieve, and list certificates. If the private CA and the ACM certificates reside in different accounts, then permissions cannot be used to enable automatic renewals. Instead, the ACM certificate owner must set up a resource-based policy to enable cross-account issuance and renewals. For more information, see Using a Resource Based Policy with Amazon Web Services Private CA.</td>
</tr>
<tr>
    <td><a href="#create_permission"><CopyableCode code="create_permission" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-CertificateAuthorityArn"><code>CertificateAuthorityArn</code></a></td>
    <td></td>
    <td>Grants one or more permissions on a private CA to the Certificate Manager (ACM) service principal (acm.amazonaws.com). These permissions allow ACM to issue and renew ACM certificates that reside in the same Amazon Web Services account as the CA. You can list current permissions with the ListPermissions action and revoke them with the DeletePermission action. About Permissions If the private CA and the certificates it issues reside in the same account, you can use CreatePermission to grant permissions for ACM to carry out automatic certificate renewals. For automatic certificate renewal to succeed, the ACM service principal needs permissions to create, retrieve, and list certificates. If the private CA and the ACM certificates reside in different accounts, then permissions cannot be used to enable automatic renewals. Instead, the ACM certificate owner must set up a resource-based policy to enable cross-account issuance and renewals. For more information, see Using a Resource Based Policy with Amazon Web Services Private CA.</td>
</tr>
<tr>
    <td><a href="#delete_permission"><CopyableCode code="delete_permission" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Revokes permissions on a private CA granted to the Certificate Manager (ACM) service principal (acm.amazonaws.com). These permissions allow ACM to issue and renew ACM certificates that reside in the same Amazon Web Services account as the CA. If you revoke these permissions, ACM will no longer renew the affected certificates automatically. Permissions can be granted with the CreatePermission action and listed with the ListPermissions action. About Permissions If the private CA and the certificates it issues reside in the same account, you can use CreatePermission to grant permissions for ACM to carry out automatic certificate renewals. For automatic certificate renewal to succeed, the ACM service principal needs permissions to create, retrieve, and list certificates. If the private CA and the ACM certificates reside in different accounts, then permissions cannot be used to enable automatic renewals. Instead, the ACM certificate owner must set up a resource-based policy to enable cross-account issuance and renewals. For more information, see Using a Resource Based Policy with Amazon Web Services Private CA.</td>
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
    defaultValue="list_permissions"
    values={[
        { label: 'list_permissions', value: 'list_permissions' }
    ]}
>
<TabItem value="list_permissions">

List all permissions on a private CA, if any, granted to the Certificate Manager (ACM) service principal (acm.amazonaws.com). These permissions allow ACM to issue and renew ACM certificates that reside in the same Amazon Web Services account as the CA. Permissions can be granted with the CreatePermission action and revoked with the DeletePermission action. About Permissions If the private CA and the certificates it issues reside in the same account, you can use CreatePermission to grant permissions for ACM to carry out automatic certificate renewals. For automatic certificate renewal to succeed, the ACM service principal needs permissions to create, retrieve, and list certificates. If the private CA and the ACM certificates reside in different accounts, then permissions cannot be used to enable automatic renewals. Instead, the ACM certificate owner must set up a resource-based policy to enable cross-account issuance and renewals. For more information, see Using a Resource Based Policy with Amazon Web Services Private CA.

```sql
SELECT
Actions,
CertificateAuthorityArn,
CreatedAt,
Policy,
Principal,
SourceAccount
FROM aws.acm_pca.permissions
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_permission"
    values={[
        { label: 'create_permission', value: 'create_permission' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_permission">

Grants one or more permissions on a private CA to the Certificate Manager (ACM) service principal (acm.amazonaws.com). These permissions allow ACM to issue and renew ACM certificates that reside in the same Amazon Web Services account as the CA. You can list current permissions with the ListPermissions action and revoke them with the DeletePermission action. About Permissions If the private CA and the certificates it issues reside in the same account, you can use CreatePermission to grant permissions for ACM to carry out automatic certificate renewals. For automatic certificate renewal to succeed, the ACM service principal needs permissions to create, retrieve, and list certificates. If the private CA and the ACM certificates reside in different accounts, then permissions cannot be used to enable automatic renewals. Instead, the ACM certificate owner must set up a resource-based policy to enable cross-account issuance and renewals. For more information, see Using a Resource Based Policy with Amazon Web Services Private CA.

```sql
INSERT INTO aws.acm_pca.permissions (
CertificateAuthorityArn,
Principal,
SourceAccount,
Actions,
region
)
SELECT 
'{{ CertificateAuthorityArn }}' /* required */,
'{{ Principal }}',
'{{ SourceAccount }}',
'{{ Actions }}',
'{{ region }}'
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: permissions
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the permissions resource.
    - name: CertificateAuthorityArn
      value: "{{ CertificateAuthorityArn }}"
      description: |
        The Amazon Resource Name (ARN) of the CA that grants the permissions. You can find the ARN by calling the ListCertificateAuthorities action. This must have the following form: arn:aws:acm-pca:region:account:certificate-authority/12345678-1234-1234-1234-123456789012 .
    - name: Principal
      value: "{{ Principal }}"
      description: |
        The Amazon Web Services service or identity that receives the permission. At this time, the only valid principal is acm.amazonaws.com.
    - name: SourceAccount
      value: "{{ SourceAccount }}"
      description: |
        The ID of the calling account.
    - name: Actions
      value:
        - "{{ Actions }}"
      description: |
        The actions that the specified Amazon Web Services service principal can use. These include IssueCertificate, GetCertificate, and ListPermissions.
`}</CodeBlock>

</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_permission"
    values={[
        { label: 'delete_permission', value: 'delete_permission' }
    ]}
>
<TabItem value="delete_permission">

Revokes permissions on a private CA granted to the Certificate Manager (ACM) service principal (acm.amazonaws.com). These permissions allow ACM to issue and renew ACM certificates that reside in the same Amazon Web Services account as the CA. If you revoke these permissions, ACM will no longer renew the affected certificates automatically. Permissions can be granted with the CreatePermission action and listed with the ListPermissions action. About Permissions If the private CA and the certificates it issues reside in the same account, you can use CreatePermission to grant permissions for ACM to carry out automatic certificate renewals. For automatic certificate renewal to succeed, the ACM service principal needs permissions to create, retrieve, and list certificates. If the private CA and the ACM certificates reside in different accounts, then permissions cannot be used to enable automatic renewals. Instead, the ACM certificate owner must set up a resource-based policy to enable cross-account issuance and renewals. For more information, see Using a Resource Based Policy with Amazon Web Services Private CA.

```sql
DELETE FROM aws.acm_pca.permissions
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
