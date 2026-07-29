--- 
title: domain_verifications
hide_title: false
hide_table_of_contents: false
keywords:
  - domain_verifications
  - vpc_lattice
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

Creates, updates, deletes, gets or lists a <code>domain_verifications</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="domain_verifications" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.vpc_lattice.domain_verifications" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_domain_verification"
    values={[
        { label: 'get_domain_verification', value: 'get_domain_verification' },
        { label: 'list_domain_verifications', value: 'list_domain_verifications' }
    ]}
>
<TabItem value="get_domain_verification">

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
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>The ID of the domain verification. (pattern: &lt;code&gt;dv-&#91;a-fA-F0-9&#93;&#123;17&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the domain verification. (pattern: &lt;code&gt;arn:&#91;a-z0-9f\-&#93;+:vpc-lattice:&#91;a-zA-Z0-9\-&#93;+:\d&#123;12&#125;:domainverification/dv-&#91;a-fA-F0-9&#93;&#123;17&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time that the domain verification was created, in ISO-8601 format.</td>
</tr>
<tr>
    <td><CopyableCode code="domain_name" /></td>
    <td><code>string</code></td>
    <td>The domain name being verified.</td>
</tr>
<tr>
    <td><CopyableCode code="last_verified_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time that the domain was last successfully verified, in ISO-8601 format.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The current status of the domain verification process. (VERIFIED, PENDING, VERIFICATION_TIMED_OUT)</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>object</code></td>
    <td>The tags associated with the domain verification.</td>
</tr>
<tr>
    <td><CopyableCode code="txt_method_config" /></td>
    <td><code>object</code></td>
    <td>The TXT record configuration used for domain verification.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_domain_verifications">

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
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>The ID of the domain verification. (pattern: &lt;code&gt;dv-&#91;a-fA-F0-9&#93;&#123;17&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the domain verification. (pattern: &lt;code&gt;arn:&#91;a-z0-9f\-&#93;+:vpc-lattice:&#91;a-zA-Z0-9\-&#93;+:\d&#123;12&#125;:domainverification/dv-&#91;a-fA-F0-9&#93;&#123;17&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time that the domain verification was created, in ISO-8601 format.</td>
</tr>
<tr>
    <td><CopyableCode code="domain_name" /></td>
    <td><code>string</code></td>
    <td>The domain name being verified.</td>
</tr>
<tr>
    <td><CopyableCode code="last_verified_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time that the domain was last successfully verified, in ISO-8601 format.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The current status of the domain verification process. (VERIFIED, PENDING, VERIFICATION_TIMED_OUT)</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>object</code></td>
    <td>The tags associated with the domain verification.</td>
</tr>
<tr>
    <td><CopyableCode code="txt_method_config" /></td>
    <td><code>object</code></td>
    <td>The TXT record configuration used for domain verification.</td>
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
    <td><a href="#get_domain_verification"><CopyableCode code="get_domain_verification" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-domain_verification_identifier"><code>domain_verification_identifier</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves information about a domain verification.ß</td>
</tr>
<tr>
    <td><a href="#list_domain_verifications"><CopyableCode code="list_domain_verifications" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-nextToken"><code>nextToken</code></a></td>
    <td>Lists the domain verifications.</td>
</tr>
<tr>
    <td><a href="#delete_domain_verification"><CopyableCode code="delete_domain_verification" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-domain_verification_identifier"><code>domain_verification_identifier</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes the specified domain verification.</td>
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
<tr id="parameter-domain_verification_identifier">
    <td><CopyableCode code="domain_verification_identifier" /></td>
    <td><code>string</code></td>
    <td>The ID of the domain verification to delete.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of results to return.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>A pagination token for the next page of results.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_domain_verification"
    values={[
        { label: 'get_domain_verification', value: 'get_domain_verification' },
        { label: 'list_domain_verifications', value: 'list_domain_verifications' }
    ]}
>
<TabItem value="get_domain_verification">

Retrieves information about a domain verification.ß

```sql
SELECT
id,
arn,
created_at,
domain_name,
last_verified_time,
status,
tags,
txt_method_config
FROM aws.vpc_lattice.domain_verifications
WHERE domain_verification_identifier = '{{ domain_verification_identifier }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_domain_verifications">

Lists the domain verifications.

```sql
SELECT
id,
arn,
created_at,
domain_name,
last_verified_time,
status,
tags,
txt_method_config
FROM aws.vpc_lattice.domain_verifications
WHERE region = '{{ region }}' -- required
AND maxResults = '{{ maxResults }}'
AND nextToken = '{{ nextToken }}'
;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_domain_verification"
    values={[
        { label: 'delete_domain_verification', value: 'delete_domain_verification' }
    ]}
>
<TabItem value="delete_domain_verification">

Deletes the specified domain verification.

```sql
DELETE FROM aws.vpc_lattice.domain_verifications
WHERE domain_verification_identifier = '{{ domain_verification_identifier }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
