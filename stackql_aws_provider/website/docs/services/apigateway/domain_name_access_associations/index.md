--- 
title: domain_name_access_associations
hide_title: false
hide_table_of_contents: false
keywords:
  - domain_name_access_associations
  - apigateway
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

Creates, updates, deletes, gets or lists a <code>domain_name_access_associations</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="domain_name_access_associations" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.apigateway.domain_name_access_associations" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_domain_name_access_associations"
    values={[
        { label: 'get_domain_name_access_associations', value: 'get_domain_name_access_associations' }
    ]}
>
<TabItem value="get_domain_name_access_associations">

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
    <td><CopyableCode code="items_" /></td>
    <td><code>array</code></td>
    <td>The current page of elements from this collection.</td>
</tr>
<tr>
    <td><CopyableCode code="position" /></td>
    <td><code>string</code></td>
    <td></td>
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
    <td><a href="#get_domain_name_access_associations"><CopyableCode code="get_domain_name_access_associations" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-position"><code>position</code></a>, <a href="#parameter-limit"><code>limit</code></a>, <a href="#parameter-resourceOwner"><code>resourceOwner</code></a></td>
    <td>Represents a collection on DomainNameAccessAssociations resources.</td>
</tr>
<tr>
    <td><a href="#create_domain_name_access_association"><CopyableCode code="create_domain_name_access_association" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-domainNameArn"><code>domainNameArn</code></a>, <a href="#parameter-accessAssociationSourceType"><code>accessAssociationSourceType</code></a>, <a href="#parameter-accessAssociationSource"><code>accessAssociationSource</code></a></td>
    <td></td>
    <td>Creates a domain name access association resource between an access association source and a private custom domain name.</td>
</tr>
<tr>
    <td><a href="#delete_domain_name_access_association"><CopyableCode code="delete_domain_name_access_association" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-domain_name_access_association_arn"><code>domain_name_access_association_arn</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes the DomainNameAccessAssociation resource. Only the AWS account that created the DomainNameAccessAssociation resource can delete it. To stop an access association source in another AWS account from accessing your private custom domain name, use the RejectDomainNameAccessAssociation operation.</td>
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
<tr id="parameter-domain_name_access_association_arn">
    <td><CopyableCode code="domain_name_access_association_arn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the domain name access association resource.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-limit">
    <td><CopyableCode code="limit" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of returned results per page. The default value is 25 and the maximum value is 500.</td>
</tr>
<tr id="parameter-position">
    <td><CopyableCode code="position" /></td>
    <td><code>string</code></td>
    <td>The current pagination position in the paged result set.</td>
</tr>
<tr id="parameter-resourceOwner">
    <td><CopyableCode code="resourceOwner" /></td>
    <td><code>string</code></td>
    <td>The owner of the domain name access association. Use SELF to only list the domain name access associations owned by your own account. Use OTHER_ACCOUNTS to list the domain name access associations with your private custom domain names that are owned by other AWS accounts.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_domain_name_access_associations"
    values={[
        { label: 'get_domain_name_access_associations', value: 'get_domain_name_access_associations' }
    ]}
>
<TabItem value="get_domain_name_access_associations">

Represents a collection on DomainNameAccessAssociations resources.

```sql
SELECT
items_,
position
FROM aws.apigateway.domain_name_access_associations
WHERE region = '{{ region }}' -- required
AND position = '{{ position }}'
AND limit = '{{ limit }}'
AND resourceOwner = '{{ resourceOwner }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_domain_name_access_association"
    values={[
        { label: 'create_domain_name_access_association', value: 'create_domain_name_access_association' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_domain_name_access_association">

Creates a domain name access association resource between an access association source and a private custom domain name.

```sql
INSERT INTO aws.apigateway.domain_name_access_associations (
domainNameArn,
accessAssociationSourceType,
accessAssociationSource,
tags,
region
)
SELECT 
'{{ domainNameArn }}' /* required */,
'{{ accessAssociationSourceType }}' /* required */,
'{{ accessAssociationSource }}' /* required */,
'{{ tags }}',
'{{ region }}'
RETURNING
accessAssociationSource,
accessAssociationSourceType,
domainNameAccessAssociationArn,
domainNameArn,
tags
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: domain_name_access_associations
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the domain_name_access_associations resource.
    - name: domainNameArn
      value: "{{ domainNameArn }}"
    - name: accessAssociationSourceType
      value: "{{ accessAssociationSourceType }}"
      valid_values: ['VPCE']
    - name: accessAssociationSource
      value: "{{ accessAssociationSource }}"
    - name: tags
      value: "{{ tags }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_domain_name_access_association"
    values={[
        { label: 'delete_domain_name_access_association', value: 'delete_domain_name_access_association' }
    ]}
>
<TabItem value="delete_domain_name_access_association">

Deletes the DomainNameAccessAssociation resource. Only the AWS account that created the DomainNameAccessAssociation resource can delete it. To stop an access association source in another AWS account from accessing your private custom domain name, use the RejectDomainNameAccessAssociation operation.

```sql
DELETE FROM aws.apigateway.domain_name_access_associations
WHERE domain_name_access_association_arn = '{{ domain_name_access_association_arn }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
