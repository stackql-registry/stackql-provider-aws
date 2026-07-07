--- 
title: aws_training_certification_email_domains
hide_title: false
hide_table_of_contents: false
keywords:
  - aws_training_certification_email_domains
  - partnercentral_account
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

Creates, updates, deletes, gets or lists an <code>aws_training_certification_email_domains</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="aws_training_certification_email_domains" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.partnercentral_account.aws_training_certification_email_domains" /></td></tr>
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
    <td><a href="#associate_aws_training_certification_email_domain"><CopyableCode code="associate_aws_training_certification_email_domain" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-Catalog"><code>Catalog</code></a>, <a href="#parameter-Identifier"><code>Identifier</code></a>, <a href="#parameter-Email"><code>Email</code></a>, <a href="#parameter-EmailVerificationCode"><code>EmailVerificationCode</code></a></td>
    <td></td>
    <td>Associates an email domain with AWS training and certification for the partner account, enabling automatic verification of employee certifications.</td>
</tr>
<tr>
    <td><a href="#disassociate_aws_training_certification_email_domain"><CopyableCode code="disassociate_aws_training_certification_email_domain" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-Catalog"><code>Catalog</code></a>, <a href="#parameter-Identifier"><code>Identifier</code></a>, <a href="#parameter-DomainName"><code>DomainName</code></a></td>
    <td></td>
    <td>Removes the association between an email domain and AWS training and certification for the partner account.</td>
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
    defaultValue="associate_aws_training_certification_email_domain"
    values={[
        { label: 'associate_aws_training_certification_email_domain', value: 'associate_aws_training_certification_email_domain' },
        { label: 'disassociate_aws_training_certification_email_domain', value: 'disassociate_aws_training_certification_email_domain' }
    ]}
>
<TabItem value="associate_aws_training_certification_email_domain">

Associates an email domain with AWS training and certification for the partner account, enabling automatic verification of employee certifications.

```sql
UPDATE aws.partnercentral_account.aws_training_certification_email_domains
SET 
Catalog = '{{ Catalog }}',
Identifier = '{{ Identifier }}',
ClientToken = '{{ ClientToken }}',
Email = '{{ Email }}',
EmailVerificationCode = '{{ EmailVerificationCode }}'
WHERE 
region = '{{ region }}' --required
AND Catalog = '{{ Catalog }}' --required
AND Identifier = '{{ Identifier }}' --required
AND Email = '{{ Email }}' --required
AND EmailVerificationCode = '{{ EmailVerificationCode }}' --required;
```
</TabItem>
<TabItem value="disassociate_aws_training_certification_email_domain">

Removes the association between an email domain and AWS training and certification for the partner account.

```sql
UPDATE aws.partnercentral_account.aws_training_certification_email_domains
SET 
Catalog = '{{ Catalog }}',
Identifier = '{{ Identifier }}',
ClientToken = '{{ ClientToken }}',
DomainName = '{{ DomainName }}'
WHERE 
region = '{{ region }}' --required
AND Catalog = '{{ Catalog }}' --required
AND Identifier = '{{ Identifier }}' --required
AND DomainName = '{{ DomainName }}' --required;
```
</TabItem>
</Tabs>
