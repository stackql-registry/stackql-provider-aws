--- 
title: kms_keys
hide_title: false
hide_table_of_contents: false
keywords:
  - kms_keys
  - logs
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

Creates, updates, deletes, gets or lists a <code>kms_keys</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="kms_keys" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.logs.kms_keys" /></td></tr>
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
    <td><a href="#associate_kms_key"><CopyableCode code="associate_kms_key" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-kmsKeyId"><code>kmsKeyId</code></a></td>
    <td></td>
    <td>Associates the specified KMS key with either one log group in the account, or with all stored CloudWatch Logs query insights results in the account. When you use AssociateKmsKey, you specify either the logGroupName parameter or the resourceIdentifier parameter. You can't specify both of those parameters in the same operation. Specify the logGroupName parameter to cause log events ingested into that log group to be encrypted with that key. Only the log events ingested after the key is associated are encrypted with that key. Associating a KMS key with a log group overrides any existing associations between the log group and a KMS key. After a KMS key is associated with a log group, all newly ingested data for the log group is encrypted using the KMS key. This association is stored as long as the data encrypted with the KMS key is still within CloudWatch Logs. This enables CloudWatch Logs to decrypt this data whenever it is requested. Associating a key with a log group does not cause the results of queries of that log group to be encrypted with that key. To have query results encrypted with a KMS key, you must use an AssociateKmsKey operation with the resourceIdentifier parameter that specifies a query-result resource. Specify the resourceIdentifier parameter with a query-result resource, to use that key to encrypt the stored results of all future StartQuery operations in the account. The response from a GetQueryResults operation will still return the query results in plain text. Even if you have not associated a key with your query results, the query results are encrypted when stored, using the default CloudWatch Logs method. If you run a query from a monitoring account that queries logs in a source account, the query results key from the monitoring account, if any, is used. If you delete the key that is used to encrypt log events or log group query results, then all the associated stored log events or query results that were encrypted with that key will be unencryptable and unusable. CloudWatch Logs supports only symmetric KMS keys. Do not associate an asymmetric KMS key with your log group or query results. For more information, see Using Symmetric and Asymmetric Keys. It can take up to 5 minutes for this operation to take effect. If you attempt to associate a KMS key with a log group but the KMS key does not exist or the KMS key is disabled, you receive an InvalidParameterException error.</td>
</tr>
<tr>
    <td><a href="#disassociate_kms_key"><CopyableCode code="disassociate_kms_key" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Disassociates the specified KMS key from the specified log group or from all CloudWatch Logs Insights query results in the account. When you use DisassociateKmsKey, you specify either the logGroupName parameter or the resourceIdentifier parameter. You can't specify both of those parameters in the same operation. Specify the logGroupName parameter to stop using the KMS key to encrypt future log events ingested and stored in the log group. Instead, they will be encrypted with the default CloudWatch Logs method. The log events that were ingested while the key was associated with the log group are still encrypted with that key. Therefore, CloudWatch Logs will need permissions for the key whenever that data is accessed. Specify the resourceIdentifier parameter with the query-result resource to stop using the KMS key to encrypt the results of all future StartQuery operations in the account. They will instead be encrypted with the default CloudWatch Logs method. The results from queries that ran while the key was associated with the account are still encrypted with that key. Therefore, CloudWatch Logs will need permissions for the key whenever that data is accessed. It can take up to 5 minutes for this operation to take effect.</td>
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

## `UPDATE` examples

<Tabs
    defaultValue="associate_kms_key"
    values={[
        { label: 'associate_kms_key', value: 'associate_kms_key' },
        { label: 'disassociate_kms_key', value: 'disassociate_kms_key' }
    ]}
>
<TabItem value="associate_kms_key">

Associates the specified KMS key with either one log group in the account, or with all stored CloudWatch Logs query insights results in the account. When you use AssociateKmsKey, you specify either the logGroupName parameter or the resourceIdentifier parameter. You can't specify both of those parameters in the same operation. Specify the logGroupName parameter to cause log events ingested into that log group to be encrypted with that key. Only the log events ingested after the key is associated are encrypted with that key. Associating a KMS key with a log group overrides any existing associations between the log group and a KMS key. After a KMS key is associated with a log group, all newly ingested data for the log group is encrypted using the KMS key. This association is stored as long as the data encrypted with the KMS key is still within CloudWatch Logs. This enables CloudWatch Logs to decrypt this data whenever it is requested. Associating a key with a log group does not cause the results of queries of that log group to be encrypted with that key. To have query results encrypted with a KMS key, you must use an AssociateKmsKey operation with the resourceIdentifier parameter that specifies a query-result resource. Specify the resourceIdentifier parameter with a query-result resource, to use that key to encrypt the stored results of all future StartQuery operations in the account. The response from a GetQueryResults operation will still return the query results in plain text. Even if you have not associated a key with your query results, the query results are encrypted when stored, using the default CloudWatch Logs method. If you run a query from a monitoring account that queries logs in a source account, the query results key from the monitoring account, if any, is used. If you delete the key that is used to encrypt log events or log group query results, then all the associated stored log events or query results that were encrypted with that key will be unencryptable and unusable. CloudWatch Logs supports only symmetric KMS keys. Do not associate an asymmetric KMS key with your log group or query results. For more information, see Using Symmetric and Asymmetric Keys. It can take up to 5 minutes for this operation to take effect. If you attempt to associate a KMS key with a log group but the KMS key does not exist or the KMS key is disabled, you receive an InvalidParameterException error.

```sql
UPDATE aws.logs.kms_keys
SET 
logGroupName = '{{ logGroupName }}',
kmsKeyId = '{{ kmsKeyId }}',
resourceIdentifier = '{{ resourceIdentifier }}'
WHERE 
region = '{{ region }}' --required
AND kmsKeyId = '{{ kmsKeyId }}' --required;
```
</TabItem>
<TabItem value="disassociate_kms_key">

Disassociates the specified KMS key from the specified log group or from all CloudWatch Logs Insights query results in the account. When you use DisassociateKmsKey, you specify either the logGroupName parameter or the resourceIdentifier parameter. You can't specify both of those parameters in the same operation. Specify the logGroupName parameter to stop using the KMS key to encrypt future log events ingested and stored in the log group. Instead, they will be encrypted with the default CloudWatch Logs method. The log events that were ingested while the key was associated with the log group are still encrypted with that key. Therefore, CloudWatch Logs will need permissions for the key whenever that data is accessed. Specify the resourceIdentifier parameter with the query-result resource to stop using the KMS key to encrypt the results of all future StartQuery operations in the account. They will instead be encrypted with the default CloudWatch Logs method. The results from queries that ran while the key was associated with the account are still encrypted with that key. Therefore, CloudWatch Logs will need permissions for the key whenever that data is accessed. It can take up to 5 minutes for this operation to take effect.

```sql
UPDATE aws.logs.kms_keys
SET 
logGroupName = '{{ logGroupName }}',
resourceIdentifier = '{{ resourceIdentifier }}'
WHERE 
region = '{{ region }}' --required;
```
</TabItem>
</Tabs>
