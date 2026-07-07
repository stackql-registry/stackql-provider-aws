--- 
title: custom_domain_associations
hide_title: false
hide_table_of_contents: false
keywords:
  - custom_domain_associations
  - redshift_serverless
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

Creates, updates, deletes, gets or lists a <code>custom_domain_associations</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="custom_domain_associations" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.redshift_serverless.custom_domain_associations" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_custom_domain_association"
    values={[
        { label: 'get_custom_domain_association', value: 'get_custom_domain_association' },
        { label: 'list_custom_domain_associations', value: 'list_custom_domain_associations' }
    ]}
>
<TabItem value="get_custom_domain_association">

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
    <td><CopyableCode code="customDomainCertificateArn" /></td>
    <td><code>string</code></td>
    <td>The custom domain name’s certificate Amazon resource name (ARN). (pattern: &lt;code&gt;arn:&#91;\w+=/,.@-&#93;+:acm:&#91;\w+=/,.@-&#93;*:&#91;0-9&#93;+:&#91;\w+=,.@-&#93;+(/&#91;\w+=,.@-&#93;+)*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="customDomainCertificateExpiryTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The expiration time for the certificate.</td>
</tr>
<tr>
    <td><CopyableCode code="customDomainName" /></td>
    <td><code>string</code></td>
    <td>The custom domain name associated with the workgroup. (pattern: &lt;code&gt;^(((?!-)&#91;A-Za-z0-9-&#93;&#123;0,62&#125;&#91;A-Za-z0-9&#93;)\.)+((?!-)&#91;A-Za-z0-9-&#93;&#123;1,62&#125;&#91;A-Za-z0-9&#93;)$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="workgroupName" /></td>
    <td><code>string</code></td>
    <td>The name of the workgroup associated with the database. (pattern: &lt;code&gt;^&#91;a-z0-9-&#93;+$&lt;/code&gt;)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_custom_domain_associations">

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
    <td><CopyableCode code="customDomainCertificateArn" /></td>
    <td><code>string</code></td>
    <td>The custom domain name’s certificate Amazon resource name (ARN). (pattern: &lt;code&gt;arn:&#91;\w+=/,.@-&#93;+:acm:&#91;\w+=/,.@-&#93;*:&#91;0-9&#93;+:&#91;\w+=,.@-&#93;+(/&#91;\w+=,.@-&#93;+)*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="customDomainCertificateExpiryTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The expiration time for the certificate.</td>
</tr>
<tr>
    <td><CopyableCode code="customDomainName" /></td>
    <td><code>string</code></td>
    <td>The custom domain name associated with the workgroup. (pattern: &lt;code&gt;^(((?!-)&#91;A-Za-z0-9-&#93;&#123;0,62&#125;&#91;A-Za-z0-9&#93;)\.)+((?!-)&#91;A-Za-z0-9-&#93;&#123;1,62&#125;&#91;A-Za-z0-9&#93;)$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="workgroupName" /></td>
    <td><code>string</code></td>
    <td>The name of the workgroup associated with the database. (pattern: &lt;code&gt;^&#91;a-z0-9-&#93;+$&lt;/code&gt;)</td>
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
    <td><a href="#get_custom_domain_association"><CopyableCode code="get_custom_domain_association" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets information about a specific custom domain association.</td>
</tr>
<tr>
    <td><a href="#list_custom_domain_associations"><CopyableCode code="list_custom_domain_associations" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Lists custom domain associations for Amazon Redshift Serverless.</td>
</tr>
<tr>
    <td><a href="#create_custom_domain_association"><CopyableCode code="create_custom_domain_association" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-customDomainCertificateArn"><code>customDomainCertificateArn</code></a>, <a href="#parameter-customDomainName"><code>customDomainName</code></a>, <a href="#parameter-workgroupName"><code>workgroupName</code></a></td>
    <td></td>
    <td>Creates a custom domain association for Amazon Redshift Serverless.</td>
</tr>
<tr>
    <td><a href="#update_custom_domain_association"><CopyableCode code="update_custom_domain_association" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-customDomainCertificateArn"><code>customDomainCertificateArn</code></a>, <a href="#parameter-customDomainName"><code>customDomainName</code></a>, <a href="#parameter-workgroupName"><code>workgroupName</code></a></td>
    <td></td>
    <td>Updates an Amazon Redshift Serverless certificate associated with a custom domain.</td>
</tr>
<tr>
    <td><a href="#delete_custom_domain_association"><CopyableCode code="delete_custom_domain_association" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a custom domain association for Amazon Redshift Serverless.</td>
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
    defaultValue="get_custom_domain_association"
    values={[
        { label: 'get_custom_domain_association', value: 'get_custom_domain_association' },
        { label: 'list_custom_domain_associations', value: 'list_custom_domain_associations' }
    ]}
>
<TabItem value="get_custom_domain_association">

Gets information about a specific custom domain association.

```sql
SELECT
customDomainCertificateArn,
customDomainCertificateExpiryTime,
customDomainName,
workgroupName
FROM aws.redshift_serverless.custom_domain_associations
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_custom_domain_associations">

Lists custom domain associations for Amazon Redshift Serverless.

```sql
SELECT
customDomainCertificateArn,
customDomainCertificateExpiryTime,
customDomainName,
workgroupName
FROM aws.redshift_serverless.custom_domain_associations
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_custom_domain_association"
    values={[
        { label: 'create_custom_domain_association', value: 'create_custom_domain_association' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_custom_domain_association">

Creates a custom domain association for Amazon Redshift Serverless.

```sql
INSERT INTO aws.redshift_serverless.custom_domain_associations (
customDomainCertificateArn,
customDomainName,
workgroupName,
region
)
SELECT 
'{{ customDomainCertificateArn }}' /* required */,
'{{ customDomainName }}' /* required */,
'{{ workgroupName }}' /* required */,
'{{ region }}'
RETURNING
customDomainCertificateArn,
customDomainCertificateExpiryTime,
customDomainName,
workgroupName
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: custom_domain_associations
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the custom_domain_associations resource.
    - name: customDomainCertificateArn
      value: "{{ customDomainCertificateArn }}"
      description: |
        The custom domain name’s certificate Amazon resource name (ARN).
    - name: customDomainName
      value: "{{ customDomainName }}"
      description: |
        The custom domain name to associate with the workgroup.
    - name: workgroupName
      value: "{{ workgroupName }}"
      description: |
        The name of the workgroup associated with the database.
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_custom_domain_association"
    values={[
        { label: 'update_custom_domain_association', value: 'update_custom_domain_association' }
    ]}
>
<TabItem value="update_custom_domain_association">

Updates an Amazon Redshift Serverless certificate associated with a custom domain.

```sql
UPDATE aws.redshift_serverless.custom_domain_associations
SET 
customDomainCertificateArn = '{{ customDomainCertificateArn }}',
customDomainName = '{{ customDomainName }}',
workgroupName = '{{ workgroupName }}'
WHERE 
region = '{{ region }}' --required
AND customDomainCertificateArn = '{{ customDomainCertificateArn }}' --required
AND customDomainName = '{{ customDomainName }}' --required
AND workgroupName = '{{ workgroupName }}' --required
RETURNING
customDomainCertificateArn,
customDomainCertificateExpiryTime,
customDomainName,
workgroupName;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_custom_domain_association"
    values={[
        { label: 'delete_custom_domain_association', value: 'delete_custom_domain_association' }
    ]}
>
<TabItem value="delete_custom_domain_association">

Deletes a custom domain association for Amazon Redshift Serverless.

```sql
DELETE FROM aws.redshift_serverless.custom_domain_associations
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
