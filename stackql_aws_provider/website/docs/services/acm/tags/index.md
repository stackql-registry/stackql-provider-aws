--- 
title: tags
hide_title: false
hide_table_of_contents: false
keywords:
  - tags
  - acm
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
<tr><td><b>Id</b></td><td><CopyableCode code="aws.acm.tags" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_tags_for_certificate"
    values={[
        { label: 'list_tags_for_certificate', value: 'list_tags_for_certificate' },
        { label: 'list_tags_for_resource', value: 'list_tags_for_resource' }
    ]}
>
<TabItem value="list_tags_for_certificate">

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
    <td><CopyableCode code="tags" /></td>
    <td><code>array</code></td>
    <td>The key-value pairs that define the applied tags.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_tags_for_resource">

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
    <td><CopyableCode code="tags" /></td>
    <td><code>array</code></td>
    <td>The tags associated with the resource.</td>
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
    <td><a href="#list_tags_for_certificate"><CopyableCode code="list_tags_for_certificate" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Lists the tags that have been applied to the ACM certificate. Use the certificate's Amazon Resource Name (ARN) to specify the certificate. To add a tag to an ACM certificate, use the AddTagsToCertificate action. To delete a tag, use the RemoveTagsFromCertificate action. This action applies only to the certificate resource type. For all other ACM resource types, use ListTagsForResource instead.</td>
</tr>
<tr>
    <td><a href="#list_tags_for_resource"><CopyableCode code="list_tags_for_resource" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Lists the tags associated with an ACM resource. Use this action for all ACM resource types except the certificate resource type. For certificate resources, use ListTagsForCertificate instead. To add one or more tags, use the TagResource action. To remove one or more tags, use the UntagResource action.</td>
</tr>
<tr>
    <td><a href="#untag_resource"><CopyableCode code="untag_resource" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-ResourceArn"><code>ResourceArn</code></a>, <a href="#parameter-TagKeys"><code>TagKeys</code></a></td>
    <td></td>
    <td>Removes one or more tags from an ACM resource. Use this action for all ACM resource types except the certificate resource type. For certificate resources, use RemoveTagsFromCertificate instead. To add one or more tags, use the TagResource action. To view all of the tags that have been applied to a resource, use the ListTagsForResource action.</td>
</tr>
<tr>
    <td><a href="#add_tags_to_certificate"><CopyableCode code="add_tags_to_certificate" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-CertificateArn"><code>CertificateArn</code></a></td>
    <td></td>
    <td>Adds one or more tags to an ACM certificate. Tags are labels that you can use to identify and organize your Amazon Web Services resources. Each tag consists of a key and an optional value. You specify the certificate on input by its Amazon Resource Name (ARN). You specify the tag by using a key-value pair. This action applies only to the certificate resource type. For all other ACM resource types, use TagResource instead. You can apply a tag to just one certificate if you want to identify a specific characteristic of that certificate, or you can apply the same tag to multiple certificates if you want to filter for a common relationship among those certificates. Similarly, you can apply the same tag to multiple resources if you want to specify a relationship among those resources. For example, you can add the same tag to an ACM certificate and an Elastic Load Balancing load balancer to indicate that they are both used by the same website. For more information, see Tagging ACM certificates. To remove one or more tags, use the RemoveTagsFromCertificate action. To view all of the tags that have been applied to the certificate, use the ListTagsForCertificate action.</td>
</tr>
<tr>
    <td><a href="#tag_resource"><CopyableCode code="tag_resource" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-ResourceArn"><code>ResourceArn</code></a></td>
    <td></td>
    <td>Adds one or more tags to an ACM resource. Tags are labels that you can use to identify and organize your Amazon Web Services resources. Each tag consists of a key and an optional value. Use this action for all ACM resource types except the certificate resource type. For certificate resources, use AddTagsToCertificate instead. To remove one or more tags, use the UntagResource action. To view all of the tags that have been applied to a resource, use the ListTagsForResource action.</td>
</tr>
<tr>
    <td><a href="#remove_tags_from_certificate"><CopyableCode code="remove_tags_from_certificate" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-CertificateArn"><code>CertificateArn</code></a></td>
    <td></td>
    <td>Remove one or more tags from an ACM certificate. A tag consists of a key-value pair. If you do not specify the value portion of the tag when calling this function, the tag will be removed regardless of value. If you specify a value, the tag is removed only if it is associated with the specified value. This action applies only to the certificate resource type. For all other ACM resource types, use UntagResource instead. To add tags to a certificate, use the AddTagsToCertificate action. To view all of the tags that have been applied to a specific ACM certificate, use the ListTagsForCertificate action.</td>
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
    defaultValue="list_tags_for_certificate"
    values={[
        { label: 'list_tags_for_certificate', value: 'list_tags_for_certificate' },
        { label: 'list_tags_for_resource', value: 'list_tags_for_resource' }
    ]}
>
<TabItem value="list_tags_for_certificate">

Lists the tags that have been applied to the ACM certificate. Use the certificate's Amazon Resource Name (ARN) to specify the certificate. To add a tag to an ACM certificate, use the AddTagsToCertificate action. To delete a tag, use the RemoveTagsFromCertificate action. This action applies only to the certificate resource type. For all other ACM resource types, use ListTagsForResource instead.

```sql
SELECT
tags
FROM aws.acm.tags
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_tags_for_resource">

Lists the tags associated with an ACM resource. Use this action for all ACM resource types except the certificate resource type. For certificate resources, use ListTagsForCertificate instead. To add one or more tags, use the TagResource action. To remove one or more tags, use the UntagResource action.

```sql
SELECT
tags
FROM aws.acm.tags
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="untag_resource"
    values={[
        { label: 'untag_resource', value: 'untag_resource' },
        { label: 'add_tags_to_certificate', value: 'add_tags_to_certificate' },
        { label: 'tag_resource', value: 'tag_resource' }
    ]}
>
<TabItem value="untag_resource">

Removes one or more tags from an ACM resource. Use this action for all ACM resource types except the certificate resource type. For certificate resources, use RemoveTagsFromCertificate instead. To add one or more tags, use the TagResource action. To view all of the tags that have been applied to a resource, use the ListTagsForResource action.

```sql
UPDATE aws.acm.tags
SET 
ResourceArn = '{{ ResourceArn }}',
TagKeys = '{{ TagKeys }}'
WHERE 
region = '{{ region }}' --required
AND ResourceArn = '{{ ResourceArn }}' --required
AND TagKeys = '{{ TagKeys }}' --required;
```
</TabItem>
<TabItem value="add_tags_to_certificate">

Adds one or more tags to an ACM certificate. Tags are labels that you can use to identify and organize your Amazon Web Services resources. Each tag consists of a key and an optional value. You specify the certificate on input by its Amazon Resource Name (ARN). You specify the tag by using a key-value pair. This action applies only to the certificate resource type. For all other ACM resource types, use TagResource instead. You can apply a tag to just one certificate if you want to identify a specific characteristic of that certificate, or you can apply the same tag to multiple certificates if you want to filter for a common relationship among those certificates. Similarly, you can apply the same tag to multiple resources if you want to specify a relationship among those resources. For example, you can add the same tag to an ACM certificate and an Elastic Load Balancing load balancer to indicate that they are both used by the same website. For more information, see Tagging ACM certificates. To remove one or more tags, use the RemoveTagsFromCertificate action. To view all of the tags that have been applied to the certificate, use the ListTagsForCertificate action.

```sql
UPDATE aws.acm.tags
SET 
CertificateArn = '{{ CertificateArn }}',
Tags = '{{ Tags }}'
WHERE 
region = '{{ region }}' --required
AND CertificateArn = '{{ CertificateArn }}' --required;
```
</TabItem>
<TabItem value="tag_resource">

Adds one or more tags to an ACM resource. Tags are labels that you can use to identify and organize your Amazon Web Services resources. Each tag consists of a key and an optional value. Use this action for all ACM resource types except the certificate resource type. For certificate resources, use AddTagsToCertificate instead. To remove one or more tags, use the UntagResource action. To view all of the tags that have been applied to a resource, use the ListTagsForResource action.

```sql
UPDATE aws.acm.tags
SET 
ResourceArn = '{{ ResourceArn }}',
Tags = '{{ Tags }}'
WHERE 
region = '{{ region }}' --required
AND ResourceArn = '{{ ResourceArn }}' --required;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="remove_tags_from_certificate"
    values={[
        { label: 'remove_tags_from_certificate', value: 'remove_tags_from_certificate' }
    ]}
>
<TabItem value="remove_tags_from_certificate">

Remove one or more tags from an ACM certificate. A tag consists of a key-value pair. If you do not specify the value portion of the tag when calling this function, the tag will be removed regardless of value. If you specify a value, the tag is removed only if it is associated with the specified value. This action applies only to the certificate resource type. For all other ACM resource types, use UntagResource instead. To add tags to a certificate, use the AddTagsToCertificate action. To view all of the tags that have been applied to a specific ACM certificate, use the ListTagsForCertificate action.

```sql
EXEC aws.acm.tags.remove_tags_from_certificate 
@region='{{ region }}' --required 
@@json=
'{
"CertificateArn": "{{ CertificateArn }}", 
"Tags": "{{ Tags }}"
}'
;
```
</TabItem>
</Tabs>
