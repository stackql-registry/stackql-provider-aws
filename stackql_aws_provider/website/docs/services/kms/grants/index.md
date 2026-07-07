--- 
title: grants
hide_title: false
hide_table_of_contents: false
keywords:
  - grants
  - kms
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
<tr><td><b>Id</b></td><td><CopyableCode code="aws.kms.grants" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_grants"
    values={[
        { label: 'list_grants', value: 'list_grants' }
    ]}
>
<TabItem value="list_grants">

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
    <td><CopyableCode code="Constraints" /></td>
    <td><code>object</code></td>
    <td>A list of key-value pairs that must be present in the encryption context of certain subsequent operations that the grant allows.</td>
</tr>
<tr>
    <td><CopyableCode code="CreationDate" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time when the grant was created.</td>
</tr>
<tr>
    <td><CopyableCode code="GrantId" /></td>
    <td><code>string</code></td>
    <td>The unique identifier for the grant.</td>
</tr>
<tr>
    <td><CopyableCode code="GranteePrincipal" /></td>
    <td><code>string</code></td>
    <td>The identity that gets the permissions in the grant. The GranteePrincipal field in the ListGrants response usually contains the user or role designated as the grantee principal in the grant. However, when the grantee principal in the grant is an Amazon Web Services service, the GranteePrincipal field contains the service principal, which might represent several different grantee principals. (pattern: &lt;code&gt;^&#91;\w+=,.@:/-&#93;+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="IssuingAccount" /></td>
    <td><code>string</code></td>
    <td>The Amazon Web Services account under which the grant was issued. (pattern: &lt;code&gt;^&#91;\w+=,.@:/-&#93;+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="KeyId" /></td>
    <td><code>string</code></td>
    <td>The unique identifier for the KMS key to which the grant applies.</td>
</tr>
<tr>
    <td><CopyableCode code="Name" /></td>
    <td><code>string</code></td>
    <td>The friendly name that identifies the grant. If a name was provided in the CreateGrant request, that name is returned. Otherwise this value is null. (pattern: &lt;code&gt;^&#91;a-zA-Z0-9:/_-&#93;+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="Operations" /></td>
    <td><code>array</code></td>
    <td>The list of operations permitted by the grant.</td>
</tr>
<tr>
    <td><CopyableCode code="RetiringPrincipal" /></td>
    <td><code>string</code></td>
    <td>The principal that can retire the grant. (pattern: &lt;code&gt;^&#91;\w+=,.@:/-&#93;+$&lt;/code&gt;)</td>
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
    <td><a href="#list_grants"><CopyableCode code="list_grants" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets a list of all grants for the specified KMS key. You must specify the KMS key in all requests. You can filter the grant list by grant ID or grantee principal. For detailed information about grants, including grant terminology, see Grants in KMS in the Key Management Service Developer Guide . For examples of creating grants in several programming languages, see Use CreateGrant with an Amazon Web Services SDK or CLI. The GranteePrincipal field in the ListGrants response usually contains the user or role designated as the grantee principal in the grant. However, when the grantee principal in the grant is an Amazon Web Services service, the GranteePrincipal field contains the service principal, which might represent several different grantee principals. Cross-account use: Yes. To perform this operation on a KMS key in a different Amazon Web Services account, specify the key ARN in the value of the KeyId parameter. Required permissions: kms:ListGrants (key policy) Related operations: CreateGrant ListRetirableGrants RetireGrant RevokeGrant Eventual consistency: The KMS API follows an eventual consistency model. For more information, see KMS eventual consistency.</td>
</tr>
<tr>
    <td><a href="#create_grant"><CopyableCode code="create_grant" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-KeyId"><code>KeyId</code></a>, <a href="#parameter-GranteePrincipal"><code>GranteePrincipal</code></a></td>
    <td></td>
    <td>Adds a grant to a KMS key. A grant is a policy instrument that allows Amazon Web Services principals to use KMS keys in cryptographic operations. It also can allow them to view a KMS key (DescribeKey) and create and manage grants. When authorizing access to a KMS key, grants are considered along with key policies and IAM policies. Grants are often used for temporary permissions because you can create one, use its permissions, and delete it without changing your key policies or IAM policies. For detailed information about grants, including grant terminology, see Grants in KMS in the Key Management Service Developer Guide . For examples of creating grants in several programming languages, see Use CreateGrant with an Amazon Web Services SDK or CLI. The CreateGrant operation returns a GrantToken and a GrantId. When you create, retire, or revoke a grant, there might be a brief delay, usually less than five minutes, until the grant is available throughout KMS. This state is known as eventual consistency. Once the grant has achieved eventual consistency, the grantee principal can use the permissions in the grant without identifying the grant. However, to use the permissions in the grant immediately, use the GrantToken that CreateGrant returns. For details, see Using a grant token in the Key Management Service Developer Guide . The CreateGrant operation also returns a GrantId. You can use the GrantId and a key identifier to identify the grant in the RetireGrant and RevokeGrant operations. To find the grant ID, use the ListGrants or ListRetirableGrants operations. The KMS key that you use for this operation must be in a compatible key state. For details, see Key states of KMS keys in the Key Management Service Developer Guide. Cross-account use: Yes. To perform this operation on a KMS key in a different Amazon Web Services account, specify the key ARN in the value of the KeyId parameter. Required permissions: kms:CreateGrant (key policy) Related operations: ListGrants ListRetirableGrants RetireGrant RevokeGrant Eventual consistency: The KMS API follows an eventual consistency model. For more information, see KMS eventual consistency.</td>
</tr>
<tr>
    <td><a href="#revoke_grant"><CopyableCode code="revoke_grant" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-KeyId"><code>KeyId</code></a>, <a href="#parameter-GrantId"><code>GrantId</code></a></td>
    <td></td>
    <td>Deletes the specified grant. You revoke a grant to terminate the permissions that the grant allows. For more information, see Retiring and revoking grants in the Key Management Service Developer Guide . When you create, retire, or revoke a grant, there might be a brief delay, usually less than five minutes, until the grant is available throughout KMS. This state is known as eventual consistency. For details, see Eventual consistency in the Key Management Service Developer Guide . For detailed information about grants, including grant terminology, see Grants in KMS in the Key Management Service Developer Guide . For examples of creating grants in several programming languages, see Use CreateGrant with an Amazon Web Services SDK or CLI. Cross-account use: Yes. To perform this operation on a KMS key in a different Amazon Web Services account, specify the key ARN in the value of the KeyId parameter. Required permissions: kms:RevokeGrant (key policy). Related operations: CreateGrant ListGrants ListRetirableGrants RetireGrant Eventual consistency: The KMS API follows an eventual consistency model. For more information, see KMS eventual consistency.</td>
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
    defaultValue="list_grants"
    values={[
        { label: 'list_grants', value: 'list_grants' }
    ]}
>
<TabItem value="list_grants">

Gets a list of all grants for the specified KMS key. You must specify the KMS key in all requests. You can filter the grant list by grant ID or grantee principal. For detailed information about grants, including grant terminology, see Grants in KMS in the Key Management Service Developer Guide . For examples of creating grants in several programming languages, see Use CreateGrant with an Amazon Web Services SDK or CLI. The GranteePrincipal field in the ListGrants response usually contains the user or role designated as the grantee principal in the grant. However, when the grantee principal in the grant is an Amazon Web Services service, the GranteePrincipal field contains the service principal, which might represent several different grantee principals. Cross-account use: Yes. To perform this operation on a KMS key in a different Amazon Web Services account, specify the key ARN in the value of the KeyId parameter. Required permissions: kms:ListGrants (key policy) Related operations: CreateGrant ListRetirableGrants RetireGrant RevokeGrant Eventual consistency: The KMS API follows an eventual consistency model. For more information, see KMS eventual consistency.

```sql
SELECT
Constraints,
CreationDate,
GrantId,
GranteePrincipal,
IssuingAccount,
KeyId,
Name,
Operations,
RetiringPrincipal
FROM aws.kms.grants
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
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_grant">

Adds a grant to a KMS key. A grant is a policy instrument that allows Amazon Web Services principals to use KMS keys in cryptographic operations. It also can allow them to view a KMS key (DescribeKey) and create and manage grants. When authorizing access to a KMS key, grants are considered along with key policies and IAM policies. Grants are often used for temporary permissions because you can create one, use its permissions, and delete it without changing your key policies or IAM policies. For detailed information about grants, including grant terminology, see Grants in KMS in the Key Management Service Developer Guide . For examples of creating grants in several programming languages, see Use CreateGrant with an Amazon Web Services SDK or CLI. The CreateGrant operation returns a GrantToken and a GrantId. When you create, retire, or revoke a grant, there might be a brief delay, usually less than five minutes, until the grant is available throughout KMS. This state is known as eventual consistency. Once the grant has achieved eventual consistency, the grantee principal can use the permissions in the grant without identifying the grant. However, to use the permissions in the grant immediately, use the GrantToken that CreateGrant returns. For details, see Using a grant token in the Key Management Service Developer Guide . The CreateGrant operation also returns a GrantId. You can use the GrantId and a key identifier to identify the grant in the RetireGrant and RevokeGrant operations. To find the grant ID, use the ListGrants or ListRetirableGrants operations. The KMS key that you use for this operation must be in a compatible key state. For details, see Key states of KMS keys in the Key Management Service Developer Guide. Cross-account use: Yes. To perform this operation on a KMS key in a different Amazon Web Services account, specify the key ARN in the value of the KeyId parameter. Required permissions: kms:CreateGrant (key policy) Related operations: ListGrants ListRetirableGrants RetireGrant RevokeGrant Eventual consistency: The KMS API follows an eventual consistency model. For more information, see KMS eventual consistency.

```sql
INSERT INTO aws.kms.grants (
KeyId,
GranteePrincipal,
RetiringPrincipal,
Operations,
Constraints,
GrantTokens,
Name,
DryRun,
region
)
SELECT 
'{{ KeyId }}' /* required */,
'{{ GranteePrincipal }}' /* required */,
'{{ RetiringPrincipal }}',
'{{ Operations }}',
'{{ Constraints }}',
'{{ GrantTokens }}',
'{{ Name }}',
{{ DryRun }},
'{{ region }}'
RETURNING
GrantId,
GrantToken
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
    - name: KeyId
      value: "{{ KeyId }}"
      description: |
        Identifies the KMS key for the grant. The grant gives principals permission to use this KMS key. Specify the key ID or key ARN of the KMS key. To specify a KMS key in a different Amazon Web Services account, you must use the key ARN. For example: Key ID: 1234abcd-12ab-34cd-56ef-1234567890ab Key ARN: arn:aws:kms:us-east-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab To get the key ID and key ARN for a KMS key, use ListKeys or DescribeKey.
    - name: GranteePrincipal
      value: "{{ GranteePrincipal }}"
      description: |
        The identity that gets the permissions specified in the grant. To specify the grantee principal, use the Amazon Resource Name (ARN) of an Amazon Web Services principal. Valid principals include Amazon Web Services accounts, IAM users, IAM roles, federated users, and assumed role users. For help with the ARN syntax for a principal, see IAM ARNs in the Identity and Access Management User Guide .
    - name: RetiringPrincipal
      value: "{{ RetiringPrincipal }}"
      description: |
        The principal that has permission to use the RetireGrant operation to retire the grant. To specify the principal, use the Amazon Resource Name (ARN) of an Amazon Web Services principal. Valid principals include Amazon Web Services accounts, IAM users, IAM roles, federated users, and assumed role users. For help with the ARN syntax for a principal, see IAM ARNs in the Identity and Access Management User Guide . The grant determines the retiring principal. Other principals might have permission to retire the grant or revoke the grant. For details, see RevokeGrant and Retiring and revoking grants in the Key Management Service Developer Guide.
    - name: Operations
      value:
        - "{{ Operations }}"
      description: |
        A list of operations that the grant permits. This list must include only operations that are permitted in a grant. Also, the operation must be supported on the KMS key. For example, you cannot create a grant for a symmetric encryption KMS key that allows the Sign operation, or a grant for an asymmetric KMS key that allows the GenerateDataKey operation. If you try, KMS returns a ValidationError exception. For details, see Grant operations in the Key Management Service Developer Guide.
    - name: Constraints
      description: |
        Specifies a grant constraint. Do not include confidential or sensitive information in this field. This field may be displayed in plaintext in CloudTrail logs and other output. KMS supports the EncryptionContextEquals and EncryptionContextSubset grant constraints, which allow the permissions in the grant only when the encryption context in the request matches (EncryptionContextEquals) or includes (EncryptionContextSubset) the encryption context specified in the constraint. The encryption context grant constraints are supported only on grant operations that include an EncryptionContext parameter, such as cryptographic operations on symmetric encryption KMS keys. Grants with grant constraints can include the DescribeKey and RetireGrant operations, but the constraint doesn't apply to these operations. If a grant with a grant constraint includes the CreateGrant operation, the constraint requires that any grants created with the CreateGrant permission have an equally strict or stricter encryption context constraint. You cannot use an encryption context grant constraint for cryptographic operations with asymmetric KMS keys or HMAC KMS keys. Operations with these keys don't support an encryption context. Each constraint value can include up to 8 encryption context pairs. The encryption context value in each constraint cannot exceed 384 characters. For information about grant constraints, see Using grant constraints in the Key Management Service Developer Guide. For more information about encryption context, see Encryption context in the Key Management Service Developer Guide .
      value:
        EncryptionContextSubset: "{{ EncryptionContextSubset }}"
        EncryptionContextEquals: "{{ EncryptionContextEquals }}"
    - name: GrantTokens
      value:
        - "{{ GrantTokens }}"
      description: |
        A list of grant tokens. Use a grant token when your permission to call this operation comes from a new grant that has not yet achieved eventual consistency. For more information, see Grant token and Using a grant token in the Key Management Service Developer Guide.
    - name: Name
      value: "{{ Name }}"
      description: |
        A friendly name for the grant. Use this value to prevent the unintended creation of duplicate grants when retrying this request. Do not include confidential or sensitive information in this field. This field may be displayed in plaintext in CloudTrail logs and other output. When this value is absent, all CreateGrant requests result in a new grant with a unique GrantId even if all the supplied parameters are identical. This can result in unintended duplicates when you retry the CreateGrant request. When this value is present, you can retry a CreateGrant request with identical parameters; if the grant already exists, the original GrantId is returned without creating a new grant. Note that the returned grant token is unique with every CreateGrant request, even when a duplicate GrantId is returned. All grant tokens for the same grant ID can be used interchangeably.
    - name: DryRun
      value: {{ DryRun }}
      description: |
        Checks if your request will succeed. DryRun is an optional parameter. To learn more about how to use this parameter, see Testing your permissions in the Key Management Service Developer Guide.
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="revoke_grant"
    values={[
        { label: 'revoke_grant', value: 'revoke_grant' }
    ]}
>
<TabItem value="revoke_grant">

Deletes the specified grant. You revoke a grant to terminate the permissions that the grant allows. For more information, see Retiring and revoking grants in the Key Management Service Developer Guide . When you create, retire, or revoke a grant, there might be a brief delay, usually less than five minutes, until the grant is available throughout KMS. This state is known as eventual consistency. For details, see Eventual consistency in the Key Management Service Developer Guide . For detailed information about grants, including grant terminology, see Grants in KMS in the Key Management Service Developer Guide . For examples of creating grants in several programming languages, see Use CreateGrant with an Amazon Web Services SDK or CLI. Cross-account use: Yes. To perform this operation on a KMS key in a different Amazon Web Services account, specify the key ARN in the value of the KeyId parameter. Required permissions: kms:RevokeGrant (key policy). Related operations: CreateGrant ListGrants ListRetirableGrants RetireGrant Eventual consistency: The KMS API follows an eventual consistency model. For more information, see KMS eventual consistency.

```sql
UPDATE aws.kms.grants
SET 
KeyId = '{{ KeyId }}',
GrantId = '{{ GrantId }}',
DryRun = {{ DryRun }}
WHERE 
region = '{{ region }}' --required
AND KeyId = '{{ KeyId }}' --required
AND GrantId = '{{ GrantId }}' --required;
```
</TabItem>
</Tabs>
