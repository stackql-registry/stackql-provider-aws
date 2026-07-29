--- 
title: tags
hide_title: false
hide_table_of_contents: false
keywords:
  - tags
  - resourcegroupstaggingapi
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
<tr><td><b>Id</b></td><td><CopyableCode code="aws.resourcegroupstaggingapi.tags" /></td></tr>
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
    <td><a href="#tag_resources"><CopyableCode code="tag_resources" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-ResourceARNList"><code>ResourceARNList</code></a>, <a href="#parameter-Tags"><code>Tags</code></a></td>
    <td></td>
    <td>Applies one or more tags to the specified resources. Note the following: Not all resources can have tags. For a list of services with resources that support tagging using this operation, see Services that support the Resource Groups Tagging API. If the resource doesn't yet support this operation, the resource's service might support tagging using its own API operations. For more information, refer to the documentation for that service. Each resource can have up to 50 tags. For other limits, see Tag Naming and Usage Conventions in the Amazon Web Services General Reference. You can only tag resources that are located in the specified Amazon Web Services Region for the Amazon Web Services account. To add tags to a resource, you need the necessary permissions for the service that the resource belongs to as well as permissions for adding tags. For more information, see the documentation for each service. When you use the Amazon Web Services Resource Groups Tagging API to update tags for Amazon Web Services CloudFormation stack sets, Amazon Web Services calls the Amazon Web Services CloudFormation UpdateStack operation. This operation may initiate additional resource property updates in addition to the desired tag updates. To avoid unexpected resource updates, Amazon Web Services recommends that you only apply or update tags to your CloudFormation stack sets using Amazon Web Services CloudFormation. Do not store personally identifiable information (PII) or other confidential or sensitive information in tags. We use tags to provide you with billing and administration services. Tags are not intended to be used for private or sensitive data. Minimum permissions In addition to the tag:TagResources permission required by this operation, you must also have the tagging permission defined by the service that created the resource. For example, to tag an Amazon EC2 instance using the TagResources operation, you must have both of the following permissions: tag:TagResources ec2:CreateTags In addition, some services might have specific requirements for tagging some types of resources. For example, to tag an Amazon S3 bucket, you must also have the s3:GetBucketTagging permission. If the expected minimum permissions don't work, check the documentation for that service's tagging APIs for more information.</td>
</tr>
<tr>
    <td><a href="#untag_resources"><CopyableCode code="untag_resources" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-ResourceARNList"><code>ResourceARNList</code></a>, <a href="#parameter-TagKeys"><code>TagKeys</code></a></td>
    <td></td>
    <td>Removes the specified tags from the specified resources. When you specify a tag key, the action removes both that key and its associated value. The operation succeeds even if you attempt to remove tags from a resource that were already removed. Note the following: To remove tags from a resource, you need the necessary permissions for the service that the resource belongs to as well as permissions for removing tags. For more information, see the documentation for the service whose resource you want to untag. You can only tag resources that are located in the specified Amazon Web Services Region for the calling Amazon Web Services account. Minimum permissions In addition to the tag:UntagResources permission required by this operation, you must also have the remove tags permission defined by the service that created the resource. For example, to remove the tags from an Amazon EC2 instance using the UntagResources operation, you must have both of the following permissions: tag:UntagResources ec2:DeleteTags In addition, some services might have specific requirements for untagging some types of resources. For example, to untag Amazon Web Services Glue Connection, you must also have the glue:GetConnection permission. If the expected minimum permissions don't work, check the documentation for that service's tagging APIs for more information.</td>
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
    defaultValue="tag_resources"
    values={[
        { label: 'tag_resources', value: 'tag_resources' },
        { label: 'untag_resources', value: 'untag_resources' }
    ]}
>
<TabItem value="tag_resources">

Applies one or more tags to the specified resources. Note the following: Not all resources can have tags. For a list of services with resources that support tagging using this operation, see Services that support the Resource Groups Tagging API. If the resource doesn't yet support this operation, the resource's service might support tagging using its own API operations. For more information, refer to the documentation for that service. Each resource can have up to 50 tags. For other limits, see Tag Naming and Usage Conventions in the Amazon Web Services General Reference. You can only tag resources that are located in the specified Amazon Web Services Region for the Amazon Web Services account. To add tags to a resource, you need the necessary permissions for the service that the resource belongs to as well as permissions for adding tags. For more information, see the documentation for each service. When you use the Amazon Web Services Resource Groups Tagging API to update tags for Amazon Web Services CloudFormation stack sets, Amazon Web Services calls the Amazon Web Services CloudFormation UpdateStack operation. This operation may initiate additional resource property updates in addition to the desired tag updates. To avoid unexpected resource updates, Amazon Web Services recommends that you only apply or update tags to your CloudFormation stack sets using Amazon Web Services CloudFormation. Do not store personally identifiable information (PII) or other confidential or sensitive information in tags. We use tags to provide you with billing and administration services. Tags are not intended to be used for private or sensitive data. Minimum permissions In addition to the tag:TagResources permission required by this operation, you must also have the tagging permission defined by the service that created the resource. For example, to tag an Amazon EC2 instance using the TagResources operation, you must have both of the following permissions: tag:TagResources ec2:CreateTags In addition, some services might have specific requirements for tagging some types of resources. For example, to tag an Amazon S3 bucket, you must also have the s3:GetBucketTagging permission. If the expected minimum permissions don't work, check the documentation for that service's tagging APIs for more information.

```sql
UPDATE aws.resourcegroupstaggingapi.tags
SET 
ResourceARNList = '{{ ResourceARNList }}',
Tags = '{{ Tags }}'
WHERE 
region = '{{ region }}' --required
AND ResourceARNList = '{{ ResourceARNList }}' --required
AND Tags = '{{ Tags }}' --required
RETURNING
failed_resources_map;
```
</TabItem>
<TabItem value="untag_resources">

Removes the specified tags from the specified resources. When you specify a tag key, the action removes both that key and its associated value. The operation succeeds even if you attempt to remove tags from a resource that were already removed. Note the following: To remove tags from a resource, you need the necessary permissions for the service that the resource belongs to as well as permissions for removing tags. For more information, see the documentation for the service whose resource you want to untag. You can only tag resources that are located in the specified Amazon Web Services Region for the calling Amazon Web Services account. Minimum permissions In addition to the tag:UntagResources permission required by this operation, you must also have the remove tags permission defined by the service that created the resource. For example, to remove the tags from an Amazon EC2 instance using the UntagResources operation, you must have both of the following permissions: tag:UntagResources ec2:DeleteTags In addition, some services might have specific requirements for untagging some types of resources. For example, to untag Amazon Web Services Glue Connection, you must also have the glue:GetConnection permission. If the expected minimum permissions don't work, check the documentation for that service's tagging APIs for more information.

```sql
UPDATE aws.resourcegroupstaggingapi.tags
SET 
ResourceARNList = '{{ ResourceARNList }}',
TagKeys = '{{ TagKeys }}'
WHERE 
region = '{{ region }}' --required
AND ResourceARNList = '{{ ResourceARNList }}' --required
AND TagKeys = '{{ TagKeys }}' --required
RETURNING
failed_resources_map;
```
</TabItem>
</Tabs>
