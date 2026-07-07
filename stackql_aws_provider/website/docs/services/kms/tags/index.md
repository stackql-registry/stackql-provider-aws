--- 
title: tags
hide_title: false
hide_table_of_contents: false
keywords:
  - tags
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

Creates, updates, deletes, gets or lists a <code>tags</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="tags" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.kms.tags" /></td></tr>
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
    <td><a href="#tag_resource"><CopyableCode code="tag_resource" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-KeyId"><code>KeyId</code></a>, <a href="#parameter-Tags"><code>Tags</code></a></td>
    <td></td>
    <td>Adds or edits tags on a customer managed key. Tagging or untagging a KMS key can allow or deny permission to the KMS key. For details, see ABAC for KMS in the Key Management Service Developer Guide. Each tag consists of a tag key and a tag value, both of which are case-sensitive strings. The tag value can be an empty (null) string. To add a tag, specify a new tag key and a tag value. To edit a tag, specify an existing tag key and a new tag value. You can use this operation to tag a customer managed key, but you cannot tag an Amazon Web Services managed key, an Amazon Web Services owned key, a custom key store, or an alias. You can also add tags to a KMS key while creating it (CreateKey) or replicating it (ReplicateKey). For information about using tags in KMS, see Tagging keys. For general information about tags, including the format and syntax, see Tagging Amazon Web Services resources in the Amazon Web Services General Reference. The KMS key that you use for this operation must be in a compatible key state. For details, see Key states of KMS keys in the Key Management Service Developer Guide. Cross-account use: No. You cannot perform this operation on a KMS key in a different Amazon Web Services account. Required permissions: kms:TagResource (key policy) Related operations CreateKey ListResourceTags ReplicateKey UntagResource Eventual consistency: The KMS API follows an eventual consistency model. For more information, see KMS eventual consistency.</td>
</tr>
<tr>
    <td><a href="#untag_resource"><CopyableCode code="untag_resource" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-KeyId"><code>KeyId</code></a>, <a href="#parameter-TagKeys"><code>TagKeys</code></a></td>
    <td></td>
    <td>Deletes tags from a customer managed key. To delete a tag, specify the tag key and the KMS key. Tagging or untagging a KMS key can allow or deny permission to the KMS key. For details, see ABAC for KMS in the Key Management Service Developer Guide. When it succeeds, the UntagResource operation doesn't return any output. Also, if the specified tag key isn't found on the KMS key, it doesn't throw an exception or return a response. To confirm that the operation worked, use the ListResourceTags operation. For information about using tags in KMS, see Tagging keys. For general information about tags, including the format and syntax, see Tagging Amazon Web Services resources in the Amazon Web Services General Reference. The KMS key that you use for this operation must be in a compatible key state. For details, see Key states of KMS keys in the Key Management Service Developer Guide. Cross-account use: No. You cannot perform this operation on a KMS key in a different Amazon Web Services account. Required permissions: kms:UntagResource (key policy) Related operations CreateKey ListResourceTags ReplicateKey TagResource Eventual consistency: The KMS API follows an eventual consistency model. For more information, see KMS eventual consistency.</td>
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
    defaultValue="tag_resource"
    values={[
        { label: 'tag_resource', value: 'tag_resource' },
        { label: 'untag_resource', value: 'untag_resource' }
    ]}
>
<TabItem value="tag_resource">

Adds or edits tags on a customer managed key. Tagging or untagging a KMS key can allow or deny permission to the KMS key. For details, see ABAC for KMS in the Key Management Service Developer Guide. Each tag consists of a tag key and a tag value, both of which are case-sensitive strings. The tag value can be an empty (null) string. To add a tag, specify a new tag key and a tag value. To edit a tag, specify an existing tag key and a new tag value. You can use this operation to tag a customer managed key, but you cannot tag an Amazon Web Services managed key, an Amazon Web Services owned key, a custom key store, or an alias. You can also add tags to a KMS key while creating it (CreateKey) or replicating it (ReplicateKey). For information about using tags in KMS, see Tagging keys. For general information about tags, including the format and syntax, see Tagging Amazon Web Services resources in the Amazon Web Services General Reference. The KMS key that you use for this operation must be in a compatible key state. For details, see Key states of KMS keys in the Key Management Service Developer Guide. Cross-account use: No. You cannot perform this operation on a KMS key in a different Amazon Web Services account. Required permissions: kms:TagResource (key policy) Related operations CreateKey ListResourceTags ReplicateKey UntagResource Eventual consistency: The KMS API follows an eventual consistency model. For more information, see KMS eventual consistency.

```sql
UPDATE aws.kms.tags
SET 
KeyId = '{{ KeyId }}',
Tags = '{{ Tags }}'
WHERE 
region = '{{ region }}' --required
AND KeyId = '{{ KeyId }}' --required
AND Tags = '{{ Tags }}' --required;
```
</TabItem>
<TabItem value="untag_resource">

Deletes tags from a customer managed key. To delete a tag, specify the tag key and the KMS key. Tagging or untagging a KMS key can allow or deny permission to the KMS key. For details, see ABAC for KMS in the Key Management Service Developer Guide. When it succeeds, the UntagResource operation doesn't return any output. Also, if the specified tag key isn't found on the KMS key, it doesn't throw an exception or return a response. To confirm that the operation worked, use the ListResourceTags operation. For information about using tags in KMS, see Tagging keys. For general information about tags, including the format and syntax, see Tagging Amazon Web Services resources in the Amazon Web Services General Reference. The KMS key that you use for this operation must be in a compatible key state. For details, see Key states of KMS keys in the Key Management Service Developer Guide. Cross-account use: No. You cannot perform this operation on a KMS key in a different Amazon Web Services account. Required permissions: kms:UntagResource (key policy) Related operations CreateKey ListResourceTags ReplicateKey TagResource Eventual consistency: The KMS API follows an eventual consistency model. For more information, see KMS eventual consistency.

```sql
UPDATE aws.kms.tags
SET 
KeyId = '{{ KeyId }}',
TagKeys = '{{ TagKeys }}'
WHERE 
region = '{{ region }}' --required
AND KeyId = '{{ KeyId }}' --required
AND TagKeys = '{{ TagKeys }}' --required;
```
</TabItem>
</Tabs>
