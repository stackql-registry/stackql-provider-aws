--- 
title: domains
hide_title: false
hide_table_of_contents: false
keywords:
  - domains
  - connectcases
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

Creates, updates, deletes, gets or lists a <code>domains</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="domains" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.connectcases.domains" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_domain"
    values={[
        { label: 'get_domain', value: 'get_domain' },
        { label: 'list_domains', value: 'list_domains' }
    ]}
>
<TabItem value="get_domain">

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
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the Cases domain. (pattern: &lt;code&gt;.*&#91;\S&#93;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="createdTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when the Cases domain was created.</td>
</tr>
<tr>
    <td><CopyableCode code="domainArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) for the Cases domain.</td>
</tr>
<tr>
    <td><CopyableCode code="domainId" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the Cases domain.</td>
</tr>
<tr>
    <td><CopyableCode code="domainStatus" /></td>
    <td><code>string</code></td>
    <td>The status of the Cases domain. (Active, CreationInProgress, CreationFailed)</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>object</code></td>
    <td>A map of of key-value pairs that represent tags on a resource. Tags are used to organize, track, or control access for this resource.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_domains">

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
    <td><CopyableCode code="domains" /></td>
    <td><code>array</code></td>
    <td>The Cases domain.</td>
</tr>
<tr>
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>The token for the next set of results. This is null if there are no more results to return.</td>
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
    <td><a href="#get_domain"><CopyableCode code="get_domain" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-domain_id"><code>domain_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns information about a specific domain if it exists.</td>
</tr>
<tr>
    <td><a href="#list_domains"><CopyableCode code="list_domains" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-nextToken"><code>nextToken</code></a></td>
    <td>Lists all cases domains in the Amazon Web Services account. Each list item is a condensed summary object of the domain.</td>
</tr>
<tr>
    <td><a href="#create_domain"><CopyableCode code="create_domain" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-name"><code>name</code></a></td>
    <td></td>
    <td>Creates a domain, which is a container for all case data, such as cases, fields, templates and layouts. Each Amazon Connect instance can be associated with only one Cases domain. This will not associate your connect instance to Cases domain. Instead, use the Amazon Connect CreateIntegrationAssociation API. You need specific IAM permissions to successfully associate the Cases domain. For more information, see Onboard to Cases.</td>
</tr>
<tr>
    <td><a href="#delete_domain"><CopyableCode code="delete_domain" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-domain_id"><code>domain_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a Cases domain. After deleting your domain you must disassociate the deleted domain from your Amazon Connect instance with another API call before being able to use Cases again with this Amazon Connect instance. See DeleteIntegrationAssociation.</td>
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
<tr id="parameter-domain_id">
    <td><CopyableCode code="domain_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the Cases domain.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of results to return per page.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_domain"
    values={[
        { label: 'get_domain', value: 'get_domain' },
        { label: 'list_domains', value: 'list_domains' }
    ]}
>
<TabItem value="get_domain">

Returns information about a specific domain if it exists.

```sql
SELECT
name,
createdTime,
domainArn,
domainId,
domainStatus,
tags
FROM aws.connectcases.domains
WHERE domain_id = '{{ domain_id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_domains">

Lists all cases domains in the Amazon Web Services account. Each list item is a condensed summary object of the domain.

```sql
SELECT
domains,
nextToken
FROM aws.connectcases.domains
WHERE region = '{{ region }}' -- required
AND maxResults = '{{ maxResults }}'
AND nextToken = '{{ nextToken }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_domain"
    values={[
        { label: 'create_domain', value: 'create_domain' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_domain">

Creates a domain, which is a container for all case data, such as cases, fields, templates and layouts. Each Amazon Connect instance can be associated with only one Cases domain. This will not associate your connect instance to Cases domain. Instead, use the Amazon Connect CreateIntegrationAssociation API. You need specific IAM permissions to successfully associate the Cases domain. For more information, see Onboard to Cases.

```sql
INSERT INTO aws.connectcases.domains (
name,
region
)
SELECT 
'{{ name }}' /* required */,
'{{ region }}'
RETURNING
domainArn,
domainId,
domainStatus
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: domains
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the domains resource.
    - name: name
      value: "{{ name }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_domain"
    values={[
        { label: 'delete_domain', value: 'delete_domain' }
    ]}
>
<TabItem value="delete_domain">

Deletes a Cases domain. After deleting your domain you must disassociate the deleted domain from your Amazon Connect instance with another API call before being able to use Cases again with this Amazon Connect instance. See DeleteIntegrationAssociation.

```sql
DELETE FROM aws.connectcases.domains
WHERE domain_id = '{{ domain_id }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
