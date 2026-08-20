--- 
title: datasets
hide_title: false
hide_table_of_contents: false
keywords:
  - datasets
  - cloudwatch
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

Creates, updates, deletes, gets or lists a <code>datasets</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="datasets" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.cloudwatch.datasets" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_dataset"
    values={[
        { label: 'get_dataset', value: 'get_dataset' }
    ]}
>
<TabItem value="get_dataset">

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
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td>Returns the Amazon Resource Name (ARN) of the dataset, in the format arn:aws:cloudwatch:Region:account-id:dataset/dataset-id . (pattern: &lt;code&gt;arn:&#91;a-zA-Z0-9-&#93;+:cloudwatch:&#91;a-zA-Z0-9-&#93;*:\d&#123;12&#125;:dataset/default&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="dataset_id" /></td>
    <td><code>string</code></td>
    <td>Returns the identifier of the dataset. (pattern: &lt;code&gt;default&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="kms_key_arn" /></td>
    <td><code>string</code></td>
    <td>Returns the Amazon Resource Name (ARN) of the customer managed Amazon Web Services KMS key that is currently associated with the dataset, if any. If the dataset is not associated with a customer managed KMS key, this field is not included in the response and the dataset is encrypted at rest using an Amazon Web Services owned key. (pattern: &lt;code&gt;arn:&#91;a-zA-Z0-9-&#93;+:kms:&#91;a-zA-Z0-9-&#93;+:\d&#123;12&#125;:key/&#91;a-f0-9-&#93;+&lt;/code&gt;)</td>
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
    <td><a href="#get_dataset"><CopyableCode code="get_dataset" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns information about the specified dataset. This includes its identifier, Amazon Resource Name (ARN), and any customer managed Amazon Web Services Key Management Service (Amazon Web Services KMS) key that is currently associated with it. Only the default dataset is supported. The default dataset is implicit for every account in every Region — you can call GetDataset for it without first creating it. If no customer managed KMS key has been associated with the dataset, the response omits the KmsKeyArn field, indicating that data is encrypted at rest using an Amazon Web Services owned key managed by Amazon CloudWatch. To associate a customer managed KMS key with a dataset, use AssociateDatasetKmsKey. To remove the association, use DisassociateDatasetKmsKey.</td>
</tr>
<tr>
    <td><a href="#associate_dataset_kms_key"><CopyableCode code="associate_dataset_kms_key" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-DatasetIdentifier"><code>DatasetIdentifier</code></a>, <a href="#parameter-KmsKeyArn"><code>KmsKeyArn</code></a></td>
    <td></td>
    <td>Associates an Amazon Web Services Key Management Service (Amazon Web Services KMS) customer managed key with the specified dataset. After this operation completes, all data published to the dataset is encrypted at rest using the specified KMS key. Callers must have kms:Decrypt permission on the key to read the encrypted data. Only the default dataset is supported. The default dataset is implicit for every account in every Region — you do not need to create it before calling this operation. You can call AssociateDatasetKmsKey on a dataset that is already associated with a KMS key to replace the existing key with a different one. To replace a key, the caller must have kms:Decrypt permission on both the current key and the new key. The KMS key that you specify must meet all of the following requirements: It must be a symmetric encryption KMS key (key spec SYMMETRIC_DEFAULT, key usage ENCRYPT_DECRYPT). Asymmetric keys, HMAC keys, and key material types other than SYMMETRIC_DEFAULT are not supported. It must be enabled and not pending deletion. Its key policy must grant the CloudWatch service principal (cloudwatch.amazonaws.com) these permissions: kms:DescribeKey, kms:GenerateDataKey, kms:Encrypt, kms:Decrypt, and kms:ReEncrypt*. Amazon CloudWatch requires these permissions to manage the data on your behalf. The calling principal must have kms:Decrypt permission on the key. It must be specified as a fully qualified key ARN. Key IDs, aliases, and alias ARNs are not accepted. It must be in the same Amazon Web Services Region as the dataset. Before completing the association, Amazon CloudWatch validates the key by performing a series of dry-run KMS operations. Service-principal checks run first to verify that the key policy grants the required access to Amazon CloudWatch. These checks include kms:DescribeKey, kms:GenerateDataKey, kms:Encrypt, kms:Decrypt, and kms:ReEncrypt*. After those succeed, a kms:Decrypt dry-run is run with the caller's credentials to verify that the calling principal can use the key. When you are replacing an existing key, the caller's kms:Decrypt dry-run is run on the current key first, and only then on the new key. If any of these checks fails, the operation fails and the existing key association (if any) remains unchanged. Common failure causes include the key being disabled, the key policy not granting the required permissions to Amazon CloudWatch, or the caller lacking kms:Decrypt permission on the key. For more information about using customer managed keys with Amazon CloudWatch, see Encryption at rest with customer managed keys in the Amazon CloudWatch User Guide.</td>
</tr>
<tr>
    <td><a href="#disassociate_dataset_kms_key"><CopyableCode code="disassociate_dataset_kms_key" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-DatasetIdentifier"><code>DatasetIdentifier</code></a></td>
    <td></td>
    <td>Removes the customer managed Amazon Web Services Key Management Service (Amazon Web Services KMS) key association from the specified dataset. After this operation completes, data that you publish to the dataset is encrypted at rest using an Amazon Web Services owned key managed by Amazon CloudWatch. Only the default dataset is supported. To call this operation, the dataset must currently have a customer managed KMS key associated with it. If the dataset has no associated KMS key, the operation fails with ResourceNotFoundException. Amazon CloudWatch performs a dry-run kms:Decrypt call on the key as part of this operation. This verifies that the caller is authorized to use the currently associated key. The caller must have kms:Decrypt permission on the currently associated key, and the key must be enabled and accessible. If the key has been disabled or scheduled for deletion, you must first re-enable or restore it before you can disassociate it from the dataset. Disassociating a KMS key from a dataset does not immediately remove the kms:Decrypt requirement on data plane operations. For up to three hours after disassociation, callers must continue to have kms:Decrypt permission on the previously associated key. Some data may still be encrypted with that key during this window. After this enforcement window elapses, the kms:Decrypt requirement is lifted. For more information about using customer managed keys with Amazon CloudWatch, see Encryption at rest with customer managed keys in the Amazon CloudWatch User Guide.</td>
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
    defaultValue="get_dataset"
    values={[
        { label: 'get_dataset', value: 'get_dataset' }
    ]}
>
<TabItem value="get_dataset">

Returns information about the specified dataset. This includes its identifier, Amazon Resource Name (ARN), and any customer managed Amazon Web Services Key Management Service (Amazon Web Services KMS) key that is currently associated with it. Only the default dataset is supported. The default dataset is implicit for every account in every Region — you can call GetDataset for it without first creating it. If no customer managed KMS key has been associated with the dataset, the response omits the KmsKeyArn field, indicating that data is encrypted at rest using an Amazon Web Services owned key managed by Amazon CloudWatch. To associate a customer managed KMS key with a dataset, use AssociateDatasetKmsKey. To remove the association, use DisassociateDatasetKmsKey.

```sql
SELECT
arn,
dataset_id,
kms_key_arn
FROM aws.cloudwatch.datasets
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="associate_dataset_kms_key"
    values={[
        { label: 'associate_dataset_kms_key', value: 'associate_dataset_kms_key' },
        { label: 'disassociate_dataset_kms_key', value: 'disassociate_dataset_kms_key' }
    ]}
>
<TabItem value="associate_dataset_kms_key">

Associates an Amazon Web Services Key Management Service (Amazon Web Services KMS) customer managed key with the specified dataset. After this operation completes, all data published to the dataset is encrypted at rest using the specified KMS key. Callers must have kms:Decrypt permission on the key to read the encrypted data. Only the default dataset is supported. The default dataset is implicit for every account in every Region — you do not need to create it before calling this operation. You can call AssociateDatasetKmsKey on a dataset that is already associated with a KMS key to replace the existing key with a different one. To replace a key, the caller must have kms:Decrypt permission on both the current key and the new key. The KMS key that you specify must meet all of the following requirements: It must be a symmetric encryption KMS key (key spec SYMMETRIC_DEFAULT, key usage ENCRYPT_DECRYPT). Asymmetric keys, HMAC keys, and key material types other than SYMMETRIC_DEFAULT are not supported. It must be enabled and not pending deletion. Its key policy must grant the CloudWatch service principal (cloudwatch.amazonaws.com) these permissions: kms:DescribeKey, kms:GenerateDataKey, kms:Encrypt, kms:Decrypt, and kms:ReEncrypt*. Amazon CloudWatch requires these permissions to manage the data on your behalf. The calling principal must have kms:Decrypt permission on the key. It must be specified as a fully qualified key ARN. Key IDs, aliases, and alias ARNs are not accepted. It must be in the same Amazon Web Services Region as the dataset. Before completing the association, Amazon CloudWatch validates the key by performing a series of dry-run KMS operations. Service-principal checks run first to verify that the key policy grants the required access to Amazon CloudWatch. These checks include kms:DescribeKey, kms:GenerateDataKey, kms:Encrypt, kms:Decrypt, and kms:ReEncrypt*. After those succeed, a kms:Decrypt dry-run is run with the caller's credentials to verify that the calling principal can use the key. When you are replacing an existing key, the caller's kms:Decrypt dry-run is run on the current key first, and only then on the new key. If any of these checks fails, the operation fails and the existing key association (if any) remains unchanged. Common failure causes include the key being disabled, the key policy not granting the required permissions to Amazon CloudWatch, or the caller lacking kms:Decrypt permission on the key. For more information about using customer managed keys with Amazon CloudWatch, see Encryption at rest with customer managed keys in the Amazon CloudWatch User Guide.

```sql
UPDATE aws.cloudwatch.datasets
SET 
DatasetIdentifier = '{{ DatasetIdentifier }}',
KmsKeyArn = '{{ KmsKeyArn }}'
WHERE 
region = '{{ region }}' --required
AND DatasetIdentifier = '{{ DatasetIdentifier }}' --required
AND KmsKeyArn = '{{ KmsKeyArn }}' --required;
```
</TabItem>
<TabItem value="disassociate_dataset_kms_key">

Removes the customer managed Amazon Web Services Key Management Service (Amazon Web Services KMS) key association from the specified dataset. After this operation completes, data that you publish to the dataset is encrypted at rest using an Amazon Web Services owned key managed by Amazon CloudWatch. Only the default dataset is supported. To call this operation, the dataset must currently have a customer managed KMS key associated with it. If the dataset has no associated KMS key, the operation fails with ResourceNotFoundException. Amazon CloudWatch performs a dry-run kms:Decrypt call on the key as part of this operation. This verifies that the caller is authorized to use the currently associated key. The caller must have kms:Decrypt permission on the currently associated key, and the key must be enabled and accessible. If the key has been disabled or scheduled for deletion, you must first re-enable or restore it before you can disassociate it from the dataset. Disassociating a KMS key from a dataset does not immediately remove the kms:Decrypt requirement on data plane operations. For up to three hours after disassociation, callers must continue to have kms:Decrypt permission on the previously associated key. Some data may still be encrypted with that key during this window. After this enforcement window elapses, the kms:Decrypt requirement is lifted. For more information about using customer managed keys with Amazon CloudWatch, see Encryption at rest with customer managed keys in the Amazon CloudWatch User Guide.

```sql
UPDATE aws.cloudwatch.datasets
SET 
DatasetIdentifier = '{{ DatasetIdentifier }}'
WHERE 
region = '{{ region }}' --required
AND DatasetIdentifier = '{{ DatasetIdentifier }}' --required;
```
</TabItem>
</Tabs>
