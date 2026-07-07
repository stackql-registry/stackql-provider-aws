--- 
title: alias
hide_title: false
hide_table_of_contents: false
keywords:
  - alias
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

Creates, updates, deletes, gets or lists an <code>alias</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="alias" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.kms.alias" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

`SELECT` not supported for this resource, use `SHOW METHODS` to view available operations for the resource.


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
    <td><a href="#create_alias"><CopyableCode code="create_alias" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-AliasName"><code>AliasName</code></a>, <a href="#parameter-TargetKeyId"><code>TargetKeyId</code></a></td>
    <td></td>
    <td>Creates a friendly name for a KMS key. Adding, deleting, or updating an alias can allow or deny permission to the KMS key. For details, see ABAC for KMS in the Key Management Service Developer Guide. You can use an alias to identify a KMS key in the KMS console, in the DescribeKey operation and in cryptographic operations, such as Encrypt and GenerateDataKey. You can also change the KMS key that's associated with the alias (UpdateAlias) or delete the alias (DeleteAlias) at any time. These operations don't affect the underlying KMS key. You can associate the alias with any customer managed key in the same Amazon Web Services Region. Each alias is associated with only one KMS key at a time, but a KMS key can have multiple aliases. A valid KMS key is required. You can't create an alias without a KMS key. The alias must be unique in the account and Region, but you can have aliases with the same name in different Regions. For detailed information about aliases, see Aliases in KMS in the Key Management Service Developer Guide. This operation does not return a response. To get the alias that you created, use the ListAliases operation. The KMS key that you use for this operation must be in a compatible key state. For details, see Key states of KMS keys in the Key Management Service Developer Guide. Cross-account use: No. You cannot perform this operation on an alias in a different Amazon Web Services account. Required permissions kms:CreateAlias on the alias (IAM policy). kms:CreateAlias on the KMS key (key policy). For details, see Controlling access to aliases in the Key Management Service Developer Guide. Related operations: DeleteAlias ListAliases UpdateAlias Eventual consistency: The KMS API follows an eventual consistency model. For more information, see KMS eventual consistency.</td>
</tr>
<tr>
    <td><a href="#update_alias"><CopyableCode code="update_alias" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-AliasName"><code>AliasName</code></a>, <a href="#parameter-TargetKeyId"><code>TargetKeyId</code></a></td>
    <td></td>
    <td>Associates an existing KMS alias with a different KMS key. Each alias is associated with only one KMS key at a time, although a KMS key can have multiple aliases. The alias and the KMS key must be in the same Amazon Web Services account and Region. Adding, deleting, or updating an alias can allow or deny permission to the KMS key. For details, see ABAC for KMS in the Key Management Service Developer Guide. The current and new KMS key must be the same type (both symmetric or both asymmetric or both HMAC), and they must have the same key usage. This restriction prevents errors in code that uses aliases. If you must assign an alias to a different type of KMS key, use DeleteAlias to delete the old alias and CreateAlias to create a new alias. You cannot use UpdateAlias to change an alias name. To change an alias name, use DeleteAlias to delete the old alias and CreateAlias to create a new alias. Because an alias is not a property of a KMS key, you can create, update, and delete the aliases of a KMS key without affecting the KMS key. Also, aliases do not appear in the response from the DescribeKey operation. To get the aliases of all KMS keys in the account, use the ListAliases operation. The KMS key that you use for this operation must be in a compatible key state. For details, see Key states of KMS keys in the Key Management Service Developer Guide. Cross-account use: No. You cannot perform this operation on a KMS key in a different Amazon Web Services account. Required permissions kms:UpdateAlias on the alias (IAM policy). kms:UpdateAlias on the current KMS key (key policy). kms:UpdateAlias on the new KMS key (key policy). For details, see Controlling access to aliases in the Key Management Service Developer Guide. Related operations: CreateAlias DeleteAlias ListAliases Eventual consistency: The KMS API follows an eventual consistency model. For more information, see KMS eventual consistency.</td>
</tr>
<tr>
    <td><a href="#delete_alias"><CopyableCode code="delete_alias" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes the specified alias. Adding, deleting, or updating an alias can allow or deny permission to the KMS key. For details, see ABAC for KMS in the Key Management Service Developer Guide. Because an alias is not a property of a KMS key, you can delete and change the aliases of a KMS key without affecting the KMS key. Also, aliases do not appear in the response from the DescribeKey operation. To get the aliases of all KMS keys, use the ListAliases operation. Each KMS key can have multiple aliases. To change the alias of a KMS key, use DeleteAlias to delete the current alias and CreateAlias to create a new alias. To associate an existing alias with a different KMS key, call UpdateAlias. Cross-account use: No. You cannot perform this operation on an alias in a different Amazon Web Services account. Required permissions kms:DeleteAlias on the alias (IAM policy). kms:DeleteAlias on the KMS key (key policy). For details, see Controlling access to aliases in the Key Management Service Developer Guide. Related operations: CreateAlias ListAliases UpdateAlias Eventual consistency: The KMS API follows an eventual consistency model. For more information, see KMS eventual consistency.</td>
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

## `INSERT` examples

<Tabs
    defaultValue="create_alias"
    values={[
        { label: 'create_alias', value: 'create_alias' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_alias">

Creates a friendly name for a KMS key. Adding, deleting, or updating an alias can allow or deny permission to the KMS key. For details, see ABAC for KMS in the Key Management Service Developer Guide. You can use an alias to identify a KMS key in the KMS console, in the DescribeKey operation and in cryptographic operations, such as Encrypt and GenerateDataKey. You can also change the KMS key that's associated with the alias (UpdateAlias) or delete the alias (DeleteAlias) at any time. These operations don't affect the underlying KMS key. You can associate the alias with any customer managed key in the same Amazon Web Services Region. Each alias is associated with only one KMS key at a time, but a KMS key can have multiple aliases. A valid KMS key is required. You can't create an alias without a KMS key. The alias must be unique in the account and Region, but you can have aliases with the same name in different Regions. For detailed information about aliases, see Aliases in KMS in the Key Management Service Developer Guide. This operation does not return a response. To get the alias that you created, use the ListAliases operation. The KMS key that you use for this operation must be in a compatible key state. For details, see Key states of KMS keys in the Key Management Service Developer Guide. Cross-account use: No. You cannot perform this operation on an alias in a different Amazon Web Services account. Required permissions kms:CreateAlias on the alias (IAM policy). kms:CreateAlias on the KMS key (key policy). For details, see Controlling access to aliases in the Key Management Service Developer Guide. Related operations: DeleteAlias ListAliases UpdateAlias Eventual consistency: The KMS API follows an eventual consistency model. For more information, see KMS eventual consistency.

```sql
INSERT INTO aws.kms.alias (
AliasName,
TargetKeyId,
region
)
SELECT 
'{{ AliasName }}' /* required */,
'{{ TargetKeyId }}' /* required */,
'{{ region }}'
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: alias
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the alias resource.
    - name: AliasName
      value: "{{ AliasName }}"
      description: |
        Specifies the alias name. This value must begin with alias/ followed by a name, such as alias/ExampleAlias. Do not include confidential or sensitive information in this field. This field may be displayed in plaintext in CloudTrail logs and other output. The AliasName value must be string of 1-256 characters. It can contain only alphanumeric characters, forward slashes (/), underscores (_), and dashes (-). The alias name cannot begin with alias/aws/. The alias/aws/ prefix is reserved for Amazon Web Services managed keys.
    - name: TargetKeyId
      value: "{{ TargetKeyId }}"
      description: |
        Associates the alias with the specified customer managed key. The KMS key must be in the same Amazon Web Services Region. A valid key ID is required. If you supply a null or empty string value, this operation returns an error. For help finding the key ID and ARN, see Find the key ID and key ARN in the Key Management Service Developer Guide . Specify the key ID or key ARN of the KMS key. For example: Key ID: 1234abcd-12ab-34cd-56ef-1234567890ab Key ARN: arn:aws:kms:us-east-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab To get the key ID and key ARN for a KMS key, use ListKeys or DescribeKey.
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_alias"
    values={[
        { label: 'update_alias', value: 'update_alias' }
    ]}
>
<TabItem value="update_alias">

Associates an existing KMS alias with a different KMS key. Each alias is associated with only one KMS key at a time, although a KMS key can have multiple aliases. The alias and the KMS key must be in the same Amazon Web Services account and Region. Adding, deleting, or updating an alias can allow or deny permission to the KMS key. For details, see ABAC for KMS in the Key Management Service Developer Guide. The current and new KMS key must be the same type (both symmetric or both asymmetric or both HMAC), and they must have the same key usage. This restriction prevents errors in code that uses aliases. If you must assign an alias to a different type of KMS key, use DeleteAlias to delete the old alias and CreateAlias to create a new alias. You cannot use UpdateAlias to change an alias name. To change an alias name, use DeleteAlias to delete the old alias and CreateAlias to create a new alias. Because an alias is not a property of a KMS key, you can create, update, and delete the aliases of a KMS key without affecting the KMS key. Also, aliases do not appear in the response from the DescribeKey operation. To get the aliases of all KMS keys in the account, use the ListAliases operation. The KMS key that you use for this operation must be in a compatible key state. For details, see Key states of KMS keys in the Key Management Service Developer Guide. Cross-account use: No. You cannot perform this operation on a KMS key in a different Amazon Web Services account. Required permissions kms:UpdateAlias on the alias (IAM policy). kms:UpdateAlias on the current KMS key (key policy). kms:UpdateAlias on the new KMS key (key policy). For details, see Controlling access to aliases in the Key Management Service Developer Guide. Related operations: CreateAlias DeleteAlias ListAliases Eventual consistency: The KMS API follows an eventual consistency model. For more information, see KMS eventual consistency.

```sql
UPDATE aws.kms.alias
SET 
AliasName = '{{ AliasName }}',
TargetKeyId = '{{ TargetKeyId }}'
WHERE 
region = '{{ region }}' --required
AND AliasName = '{{ AliasName }}' --required
AND TargetKeyId = '{{ TargetKeyId }}' --required;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_alias"
    values={[
        { label: 'delete_alias', value: 'delete_alias' }
    ]}
>
<TabItem value="delete_alias">

Deletes the specified alias. Adding, deleting, or updating an alias can allow or deny permission to the KMS key. For details, see ABAC for KMS in the Key Management Service Developer Guide. Because an alias is not a property of a KMS key, you can delete and change the aliases of a KMS key without affecting the KMS key. Also, aliases do not appear in the response from the DescribeKey operation. To get the aliases of all KMS keys, use the ListAliases operation. Each KMS key can have multiple aliases. To change the alias of a KMS key, use DeleteAlias to delete the current alias and CreateAlias to create a new alias. To associate an existing alias with a different KMS key, call UpdateAlias. Cross-account use: No. You cannot perform this operation on an alias in a different Amazon Web Services account. Required permissions kms:DeleteAlias on the alias (IAM policy). kms:DeleteAlias on the KMS key (key policy). For details, see Controlling access to aliases in the Key Management Service Developer Guide. Related operations: CreateAlias ListAliases UpdateAlias Eventual consistency: The KMS API follows an eventual consistency model. For more information, see KMS eventual consistency.

```sql
DELETE FROM aws.kms.alias
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
