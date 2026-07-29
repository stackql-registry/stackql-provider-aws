--- 
title: certificate_providers
hide_title: false
hide_table_of_contents: false
keywords:
  - certificate_providers
  - iot
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

Creates, updates, deletes, gets or lists a <code>certificate_providers</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="certificate_providers" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.iot.certificate_providers" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_certificate_provider"
    values={[
        { label: 'describe_certificate_provider', value: 'describe_certificate_provider' },
        { label: 'list_certificate_providers', value: 'list_certificate_providers' }
    ]}
>
<TabItem value="describe_certificate_provider">

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
    <td><CopyableCode code="account_default_for_operations" /></td>
    <td><code>array</code></td>
    <td>A list of the operations that the certificate provider will use to generate certificates. Valid value: CreateCertificateFromCsr.</td>
</tr>
<tr>
    <td><CopyableCode code="certificate_provider_arn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the certificate provider.</td>
</tr>
<tr>
    <td><CopyableCode code="certificate_provider_name" /></td>
    <td><code>string</code></td>
    <td>The name of the certificate provider. (pattern: &lt;code&gt;&#91;\w=,@-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="creation_date" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date-time string that indicates when the certificate provider was created.</td>
</tr>
<tr>
    <td><CopyableCode code="lambda_function_arn" /></td>
    <td><code>string</code></td>
    <td>The Lambda function ARN that's associated with the certificate provider. (pattern: &lt;code&gt;&#91;\s\S&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="last_modified_date" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date-time string that indicates when the certificate provider was last updated.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_certificate_providers">

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
    <td><CopyableCode code="certificate_providers" /></td>
    <td><code>array</code></td>
    <td>The list of certificate providers in your Amazon Web Services account.</td>
</tr>
<tr>
    <td><CopyableCode code="next_token" /></td>
    <td><code>string</code></td>
    <td>The token for the next set of results, or null if there are no more results. (pattern: &lt;code&gt;&#91;A-Za-z0-9+/&#93;+=&#123;0,2&#125;&lt;/code&gt;)</td>
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
    <td><a href="#describe_certificate_provider"><CopyableCode code="describe_certificate_provider" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-certificate_provider_name"><code>certificate_provider_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Describes a certificate provider. Requires permission to access the DescribeCertificateProvider action.</td>
</tr>
<tr>
    <td><a href="#list_certificate_providers"><CopyableCode code="list_certificate_providers" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-nextToken"><code>nextToken</code></a>, <a href="#parameter-isAscendingOrder"><code>isAscendingOrder</code></a></td>
    <td>Lists all your certificate providers in your Amazon Web Services account. Requires permission to access the ListCertificateProviders action.</td>
</tr>
<tr>
    <td><a href="#create_certificate_provider"><CopyableCode code="create_certificate_provider" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-certificate_provider_name"><code>certificate_provider_name</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-lambdaFunctionArn"><code>lambdaFunctionArn</code></a>, <a href="#parameter-accountDefaultForOperations"><code>accountDefaultForOperations</code></a></td>
    <td></td>
    <td>Creates an Amazon Web Services IoT Core certificate provider. You can use Amazon Web Services IoT Core certificate provider to customize how to sign a certificate signing request (CSR) in IoT fleet provisioning. For more information, see Customizing certificate signing using Amazon Web Services IoT Core certificate provider from Amazon Web Services IoT Core Developer Guide. Requires permission to access the CreateCertificateProvider action. After you create a certificate provider, the behavior of CreateCertificateFromCsr API for fleet provisioning will change and all API calls to CreateCertificateFromCsr will invoke the certificate provider to create the certificates. It can take up to a few minutes for this behavior to change after a certificate provider is created.</td>
</tr>
<tr>
    <td><a href="#update_certificate_provider"><CopyableCode code="update_certificate_provider" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-certificate_provider_name"><code>certificate_provider_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Updates a certificate provider. Requires permission to access the UpdateCertificateProvider action.</td>
</tr>
<tr>
    <td><a href="#delete_certificate_provider"><CopyableCode code="delete_certificate_provider" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-certificate_provider_name"><code>certificate_provider_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a certificate provider. Requires permission to access the DeleteCertificateProvider action. If you delete the certificate provider resource, the behavior of CreateCertificateFromCsr will resume, and IoT will create certificates signed by IoT from a certificate signing request (CSR).</td>
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
<tr id="parameter-certificate_provider_name">
    <td><CopyableCode code="certificate_provider_name" /></td>
    <td><code>string</code></td>
    <td>The name of the certificate provider.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-isAscendingOrder">
    <td><CopyableCode code="isAscendingOrder" /></td>
    <td><code>boolean</code></td>
    <td>Returns the list of certificate providers in ascending alphabetical order.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>The token for the next set of results, or null if there are no more results.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_certificate_provider"
    values={[
        { label: 'describe_certificate_provider', value: 'describe_certificate_provider' },
        { label: 'list_certificate_providers', value: 'list_certificate_providers' }
    ]}
>
<TabItem value="describe_certificate_provider">

Describes a certificate provider. Requires permission to access the DescribeCertificateProvider action.

```sql
SELECT
account_default_for_operations,
certificate_provider_arn,
certificate_provider_name,
creation_date,
lambda_function_arn,
last_modified_date
FROM aws.iot.certificate_providers
WHERE certificate_provider_name = '{{ certificate_provider_name }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_certificate_providers">

Lists all your certificate providers in your Amazon Web Services account. Requires permission to access the ListCertificateProviders action.

```sql
SELECT
certificate_providers,
next_token
FROM aws.iot.certificate_providers
WHERE region = '{{ region }}' -- required
AND nextToken = '{{ nextToken }}'
AND isAscendingOrder = '{{ isAscendingOrder }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_certificate_provider"
    values={[
        { label: 'create_certificate_provider', value: 'create_certificate_provider' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_certificate_provider">

Creates an Amazon Web Services IoT Core certificate provider. You can use Amazon Web Services IoT Core certificate provider to customize how to sign a certificate signing request (CSR) in IoT fleet provisioning. For more information, see Customizing certificate signing using Amazon Web Services IoT Core certificate provider from Amazon Web Services IoT Core Developer Guide. Requires permission to access the CreateCertificateProvider action. After you create a certificate provider, the behavior of CreateCertificateFromCsr API for fleet provisioning will change and all API calls to CreateCertificateFromCsr will invoke the certificate provider to create the certificates. It can take up to a few minutes for this behavior to change after a certificate provider is created.

```sql
INSERT INTO aws.iot.certificate_providers (
lambdaFunctionArn,
accountDefaultForOperations,
clientToken,
tags,
certificate_provider_name,
region
)
SELECT 
'{{ lambdaFunctionArn }}' /* required */,
'{{ accountDefaultForOperations }}' /* required */,
'{{ clientToken }}',
'{{ tags }}',
'{{ certificate_provider_name }}',
'{{ region }}'
RETURNING
certificate_provider_arn,
certificate_provider_name
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: certificate_providers
  props:
    - name: certificate_provider_name
      value: "{{ certificate_provider_name }}"
      description: Required parameter for the certificate_providers resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the certificate_providers resource.
    - name: lambdaFunctionArn
      value: "{{ lambdaFunctionArn }}"
    - name: accountDefaultForOperations
      value:
        - "{{ accountDefaultForOperations }}"
    - name: clientToken
      value: "{{ clientToken }}"
    - name: tags
      value:
        - Key: "{{ Key }}"
          Value: "{{ Value }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_certificate_provider"
    values={[
        { label: 'update_certificate_provider', value: 'update_certificate_provider' }
    ]}
>
<TabItem value="update_certificate_provider">

Updates a certificate provider. Requires permission to access the UpdateCertificateProvider action.

```sql
UPDATE aws.iot.certificate_providers
SET 
lambdaFunctionArn = '{{ lambdaFunctionArn }}',
accountDefaultForOperations = '{{ accountDefaultForOperations }}'
WHERE 
certificate_provider_name = '{{ certificate_provider_name }}' --required
AND region = '{{ region }}' --required
RETURNING
certificate_provider_arn,
certificate_provider_name;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_certificate_provider"
    values={[
        { label: 'delete_certificate_provider', value: 'delete_certificate_provider' }
    ]}
>
<TabItem value="delete_certificate_provider">

Deletes a certificate provider. Requires permission to access the DeleteCertificateProvider action. If you delete the certificate provider resource, the behavior of CreateCertificateFromCsr will resume, and IoT will create certificates signed by IoT from a certificate signing request (CSR).

```sql
DELETE FROM aws.iot.certificate_providers
WHERE certificate_provider_name = '{{ certificate_provider_name }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
