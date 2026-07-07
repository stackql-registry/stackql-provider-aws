--- 
title: signing_certificates
hide_title: false
hide_table_of_contents: false
keywords:
  - signing_certificates
  - cognito_idp
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

Creates, updates, deletes, gets or lists a <code>signing_certificates</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="signing_certificates" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.cognito_idp.signing_certificates" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_signing_certificate"
    values={[
        { label: 'get_signing_certificate', value: 'get_signing_certificate' }
    ]}
>
<TabItem value="get_signing_certificate">

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
    <td><CopyableCode code="Certificate" /></td>
    <td><code>string</code></td>
    <td>The x.509 certificate that signs SAML 2.0 authentication requests for your user pool.</td>
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
    <td><a href="#get_signing_certificate"><CopyableCode code="get_signing_certificate" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Given a user pool ID, returns the signing certificate for SAML 2.0 federation. Issued certificates are valid for 10 years from the date of issue. Amazon Cognito issues and assigns a new signing certificate annually. This renewal process returns a new value in the response to GetSigningCertificate, but doesn't invalidate the original certificate. For more information, see Signing SAML requests. Amazon Cognito evaluates Identity and Access Management (IAM) policies in requests for this API operation. For this operation, you must use IAM credentials to authorize requests, and you must grant yourself the corresponding IAM permission in a policy. Learn more Signing Amazon Web Services API Requests Using the Amazon Cognito user pools API and user pool endpoints</td>
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
    defaultValue="get_signing_certificate"
    values={[
        { label: 'get_signing_certificate', value: 'get_signing_certificate' }
    ]}
>
<TabItem value="get_signing_certificate">

Given a user pool ID, returns the signing certificate for SAML 2.0 federation. Issued certificates are valid for 10 years from the date of issue. Amazon Cognito issues and assigns a new signing certificate annually. This renewal process returns a new value in the response to GetSigningCertificate, but doesn't invalidate the original certificate. For more information, see Signing SAML requests. Amazon Cognito evaluates Identity and Access Management (IAM) policies in requests for this API operation. For this operation, you must use IAM credentials to authorize requests, and you must grant yourself the corresponding IAM permission in a policy. Learn more Signing Amazon Web Services API Requests Using the Amazon Cognito user pools API and user pool endpoints

```sql
SELECT
Certificate
FROM aws.cognito_idp.signing_certificates
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
