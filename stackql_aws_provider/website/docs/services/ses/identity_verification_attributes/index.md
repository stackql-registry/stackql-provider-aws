--- 
title: identity_verification_attributes
hide_title: false
hide_table_of_contents: false
keywords:
  - identity_verification_attributes
  - ses
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

Creates, updates, deletes, gets or lists an <code>identity_verification_attributes</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="identity_verification_attributes" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.ses.identity_verification_attributes" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_identity_verification_attributes"
    values={[
        { label: 'get_identity_verification_attributes', value: 'get_identity_verification_attributes' }
    ]}
>
<TabItem value="get_identity_verification_attributes">

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
    <td><CopyableCode code="VerificationAttributes" /></td>
    <td><code>string</code></td>
    <td>A map of Identities to IdentityVerificationAttributes objects.</td>
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
    <td><a href="#get_identity_verification_attributes"><CopyableCode code="get_identity_verification_attributes" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-Identities"><code>Identities</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Given a list of identities (email addresses and/or domains), returns the verification status and (for domain identities) the verification token for each identity. The verification status of an email address is "Pending" until the email address owner clicks the link within the verification email that Amazon SES sent to that address. If the email address owner clicks the link within 24 hours, the verification status of the email address changes to "Success". If the link is not clicked within 24 hours, the verification status changes to "Failed." In that case, to verify the email address, you must restart the verification process from the beginning. For domain identities, the domain's verification status is "Pending" as Amazon SES searches for the required TXT record in the DNS settings of the domain. When Amazon SES detects the record, the domain's verification status changes to "Success". If Amazon SES is unable to detect the record within 72 hours, the domain's verification status changes to "Failed." In that case, to verify the domain, you must restart the verification process from the beginning. This operation is throttled at one request per second and can only get verification attributes for up to 100 identities at a time.</td>
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
<tr id="parameter-Identities">
    <td><CopyableCode code="Identities" /></td>
    <td><code>array</code></td>
    <td>A list of identities.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_identity_verification_attributes"
    values={[
        { label: 'get_identity_verification_attributes', value: 'get_identity_verification_attributes' }
    ]}
>
<TabItem value="get_identity_verification_attributes">

Given a list of identities (email addresses and/or domains), returns the verification status and (for domain identities) the verification token for each identity. The verification status of an email address is "Pending" until the email address owner clicks the link within the verification email that Amazon SES sent to that address. If the email address owner clicks the link within 24 hours, the verification status of the email address changes to "Success". If the link is not clicked within 24 hours, the verification status changes to "Failed." In that case, to verify the email address, you must restart the verification process from the beginning. For domain identities, the domain's verification status is "Pending" as Amazon SES searches for the required TXT record in the DNS settings of the domain. When Amazon SES detects the record, the domain's verification status changes to "Success". If Amazon SES is unable to detect the record within 72 hours, the domain's verification status changes to "Failed." In that case, to verify the domain, you must restart the verification process from the beginning. This operation is throttled at one request per second and can only get verification attributes for up to 100 identities at a time.

```sql
SELECT
VerificationAttributes
FROM aws.ses.identity_verification_attributes
WHERE Identities = '{{ Identities }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
