--- 
title: domain_names
hide_title: false
hide_table_of_contents: false
keywords:
  - domain_names
  - appsync
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

Creates, updates, deletes, gets or lists a <code>domain_names</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="domain_names" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.appsync.domain_names" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_domain_name"
    values={[
        { label: 'get_domain_name', value: 'get_domain_name' },
        { label: 'list_domain_names', value: 'list_domain_names' }
    ]}
>
<TabItem value="get_domain_name">

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
    <td><CopyableCode code="appsync_domain_name" /></td>
    <td><code>string</code></td>
    <td>The domain name that AppSync provides.</td>
</tr>
<tr>
    <td><CopyableCode code="certificate_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the certificate. This can be an Certificate Manager (ACM) certificate or an Identity and Access Management (IAM) server certificate. (pattern: &lt;code&gt;^arn:&#91;a-z-&#93;*:(acm|iam):&#91;a-z0-9-&#93;*:\d&#123;12&#125;:(certificate|server-certificate)/&#91;0-9A-Za-z_/-&#93;*$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>A description of the DomainName configuration. (pattern: &lt;code&gt;^.*$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="domain_name" /></td>
    <td><code>string</code></td>
    <td>The domain name. (pattern: &lt;code&gt;^(\*&#91;\w\d-&#93;*\.)?(&#91;\w\d-&#93;+\.)+&#91;\w\d-&#93;+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="domain_name_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the domain name.</td>
</tr>
<tr>
    <td><CopyableCode code="hosted_zone_id" /></td>
    <td><code>string</code></td>
    <td>The ID of your Amazon Route 53 hosted zone.</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>object</code></td>
    <td></td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_domain_names">

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
    <td><CopyableCode code="appsync_domain_name" /></td>
    <td><code>string</code></td>
    <td>The domain name that AppSync provides.</td>
</tr>
<tr>
    <td><CopyableCode code="certificate_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the certificate. This can be an Certificate Manager (ACM) certificate or an Identity and Access Management (IAM) server certificate. (pattern: &lt;code&gt;^arn:&#91;a-z-&#93;*:(acm|iam):&#91;a-z0-9-&#93;*:\d&#123;12&#125;:(certificate|server-certificate)/&#91;0-9A-Za-z_/-&#93;*$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>A description of the DomainName configuration. (pattern: &lt;code&gt;^.*$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="domain_name" /></td>
    <td><code>string</code></td>
    <td>The domain name. (pattern: &lt;code&gt;^(\*&#91;\w\d-&#93;*\.)?(&#91;\w\d-&#93;+\.)+&#91;\w\d-&#93;+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="domain_name_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the domain name.</td>
</tr>
<tr>
    <td><CopyableCode code="hosted_zone_id" /></td>
    <td><code>string</code></td>
    <td>The ID of your Amazon Route 53 hosted zone.</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>object</code></td>
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
    <td><a href="#get_domain_name"><CopyableCode code="get_domain_name" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-domain_name"><code>domain_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves a custom DomainName object.</td>
</tr>
<tr>
    <td><a href="#list_domain_names"><CopyableCode code="list_domain_names" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-nextToken"><code>nextToken</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a></td>
    <td>Lists multiple custom domain names.</td>
</tr>
<tr>
    <td><a href="#create_domain_name"><CopyableCode code="create_domain_name" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-domainName"><code>domainName</code></a>, <a href="#parameter-certificateArn"><code>certificateArn</code></a></td>
    <td></td>
    <td>Creates a custom DomainName object.</td>
</tr>
<tr>
    <td><a href="#update_domain_name"><CopyableCode code="update_domain_name" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-domain_name"><code>domain_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Updates a custom DomainName object.</td>
</tr>
<tr>
    <td><a href="#delete_domain_name"><CopyableCode code="delete_domain_name" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-domain_name"><code>domain_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a custom DomainName object.</td>
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
<tr id="parameter-domain_name">
    <td><CopyableCode code="domain_name" /></td>
    <td><code>string</code></td>
    <td>The domain name.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of results that you want the request to return.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>An identifier that was returned from the previous call to this operation, which you can use to return the next set of items in the list.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_domain_name"
    values={[
        { label: 'get_domain_name', value: 'get_domain_name' },
        { label: 'list_domain_names', value: 'list_domain_names' }
    ]}
>
<TabItem value="get_domain_name">

Retrieves a custom DomainName object.

```sql
SELECT
appsync_domain_name,
certificate_arn,
description,
domain_name,
domain_name_arn,
hosted_zone_id,
tags
FROM aws.appsync.domain_names
WHERE domain_name = '{{ domain_name }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_domain_names">

Lists multiple custom domain names.

```sql
SELECT
appsync_domain_name,
certificate_arn,
description,
domain_name,
domain_name_arn,
hosted_zone_id,
tags
FROM aws.appsync.domain_names
WHERE region = '{{ region }}' -- required
AND nextToken = '{{ nextToken }}'
AND maxResults = '{{ maxResults }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_domain_name"
    values={[
        { label: 'create_domain_name', value: 'create_domain_name' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_domain_name">

Creates a custom DomainName object.

```sql
INSERT INTO aws.appsync.domain_names (
domainName,
certificateArn,
description,
tags,
region
)
SELECT 
'{{ domainName }}' /* required */,
'{{ certificateArn }}' /* required */,
'{{ description }}',
'{{ tags }}',
'{{ region }}'
RETURNING
domain_name_config
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: domain_names
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the domain_names resource.
    - name: domainName
      value: "{{ domainName }}"
    - name: certificateArn
      value: "{{ certificateArn }}"
    - name: description
      value: "{{ description }}"
    - name: tags
      value: "{{ tags }}"
      description: |
        A map with keys of TagKey objects and values of TagValue objects.
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_domain_name"
    values={[
        { label: 'update_domain_name', value: 'update_domain_name' }
    ]}
>
<TabItem value="update_domain_name">

Updates a custom DomainName object.

```sql
UPDATE aws.appsync.domain_names
SET 
description = '{{ description }}'
WHERE 
domain_name = '{{ domain_name }}' --required
AND region = '{{ region }}' --required
RETURNING
domain_name_config;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_domain_name"
    values={[
        { label: 'delete_domain_name', value: 'delete_domain_name' }
    ]}
>
<TabItem value="delete_domain_name">

Deletes a custom DomainName object.

```sql
DELETE FROM aws.appsync.domain_names
WHERE domain_name = '{{ domain_name }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
