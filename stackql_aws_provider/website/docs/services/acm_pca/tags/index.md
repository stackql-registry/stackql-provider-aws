--- 
title: tags
hide_title: false
hide_table_of_contents: false
keywords:
  - tags
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

Creates, updates, deletes, gets or lists a <code>tags</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="tags" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.acm_pca.tags" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_tags"
    values={[
        { label: 'list_tags', value: 'list_tags' }
    ]}
>
<TabItem value="list_tags">

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
    <td><CopyableCode code="Key" /></td>
    <td><code>string</code></td>
    <td>Key (name) of the tag. (pattern: &lt;code&gt;(&#91;\p&#123;L&#125;\p&#123;Z&#125;\p&#123;N&#125;_.:/=+\-@&#93;*)&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="Value" /></td>
    <td><code>string</code></td>
    <td>Value of the tag. (pattern: &lt;code&gt;(&#91;\p&#123;L&#125;\p&#123;Z&#125;\p&#123;N&#125;_.:/=+\-@&#93;*)&lt;/code&gt;)</td>
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
    <td><a href="#list_tags"><CopyableCode code="list_tags" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Lists the tags, if any, that are associated with your private CA or one that has been shared with you. Tags are labels that you can use to identify and organize your CAs. Each tag consists of a key and an optional value. Call the TagCertificateAuthority action to add one or more tags to your CA. Call the UntagCertificateAuthority action to remove tags.</td>
</tr>
<tr>
    <td><a href="#tag_certificate_authority"><CopyableCode code="tag_certificate_authority" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-CertificateAuthorityArn"><code>CertificateAuthorityArn</code></a>, <a href="#parameter-Tags"><code>Tags</code></a></td>
    <td></td>
    <td>Adds one or more tags to your private CA. Tags are labels that you can use to identify and organize your Amazon Web Services resources. Each tag consists of a key and an optional value. You specify the private CA on input by its Amazon Resource Name (ARN). You specify the tag by using a key-value pair. You can apply a tag to just one private CA if you want to identify a specific characteristic of that CA, or you can apply the same tag to multiple private CAs if you want to filter for a common relationship among those CAs. To remove one or more tags, use the UntagCertificateAuthority action. Call the ListTags action to see what tags are associated with your CA. To attach tags to a private CA during the creation procedure, a CA administrator must first associate an inline IAM policy with the CreateCertificateAuthority action and explicitly allow tagging. For more information, see Attaching tags to a CA at the time of creation.</td>
</tr>
<tr>
    <td><a href="#untag_certificate_authority"><CopyableCode code="untag_certificate_authority" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-CertificateAuthorityArn"><code>CertificateAuthorityArn</code></a>, <a href="#parameter-Tags"><code>Tags</code></a></td>
    <td></td>
    <td>Remove one or more tags from your private CA. A tag consists of a key-value pair. If you do not specify the value portion of the tag when calling this action, the tag will be removed regardless of value. If you specify a value, the tag is removed only if it is associated with the specified value. To add tags to a private CA, use the TagCertificateAuthority. Call the ListTags action to see what tags are associated with your CA.</td>
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
    defaultValue="list_tags"
    values={[
        { label: 'list_tags', value: 'list_tags' }
    ]}
>
<TabItem value="list_tags">

Lists the tags, if any, that are associated with your private CA or one that has been shared with you. Tags are labels that you can use to identify and organize your CAs. Each tag consists of a key and an optional value. Call the TagCertificateAuthority action to add one or more tags to your CA. Call the UntagCertificateAuthority action to remove tags.

```sql
SELECT
Key,
Value
FROM aws.acm_pca.tags
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="tag_certificate_authority"
    values={[
        { label: 'tag_certificate_authority', value: 'tag_certificate_authority' }
    ]}
>
<TabItem value="tag_certificate_authority">

Adds one or more tags to your private CA. Tags are labels that you can use to identify and organize your Amazon Web Services resources. Each tag consists of a key and an optional value. You specify the private CA on input by its Amazon Resource Name (ARN). You specify the tag by using a key-value pair. You can apply a tag to just one private CA if you want to identify a specific characteristic of that CA, or you can apply the same tag to multiple private CAs if you want to filter for a common relationship among those CAs. To remove one or more tags, use the UntagCertificateAuthority action. Call the ListTags action to see what tags are associated with your CA. To attach tags to a private CA during the creation procedure, a CA administrator must first associate an inline IAM policy with the CreateCertificateAuthority action and explicitly allow tagging. For more information, see Attaching tags to a CA at the time of creation.

```sql
UPDATE aws.acm_pca.tags
SET 
CertificateAuthorityArn = '{{ CertificateAuthorityArn }}',
Tags = '{{ Tags }}'
WHERE 
region = '{{ region }}' --required
AND CertificateAuthorityArn = '{{ CertificateAuthorityArn }}' --required
AND Tags = '{{ Tags }}' --required;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="untag_certificate_authority"
    values={[
        { label: 'untag_certificate_authority', value: 'untag_certificate_authority' }
    ]}
>
<TabItem value="untag_certificate_authority">

Remove one or more tags from your private CA. A tag consists of a key-value pair. If you do not specify the value portion of the tag when calling this action, the tag will be removed regardless of value. If you specify a value, the tag is removed only if it is associated with the specified value. To add tags to a private CA, use the TagCertificateAuthority. Call the ListTags action to see what tags are associated with your CA.

```sql
EXEC aws.acm_pca.tags.untag_certificate_authority 
@region='{{ region }}' --required 
@@json=
'{
"CertificateAuthorityArn": "{{ CertificateAuthorityArn }}", 
"Tags": "{{ Tags }}"
}'
;
```
</TabItem>
</Tabs>
