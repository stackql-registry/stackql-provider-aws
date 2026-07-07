--- 
title: domains
hide_title: false
hide_table_of_contents: false
keywords:
  - domains
  - connecthealth
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
<tr><td><b>Id</b></td><td><CopyableCode code="aws.connecthealth.domains" /></td></tr>
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
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td> (pattern: &lt;code&gt;arn:aws:health-agent:&#91;a-z0-9-&#93;+:&#91;0-9&#93;&#123;12&#125;:domain/(hai-|dom-)&#91;a-z0-9&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="createdAt" /></td>
    <td><code>string (date-time)</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="domainId" /></td>
    <td><code>string</code></td>
    <td> (pattern: &lt;code&gt;(hai-|dom-)&#91;a-z0-9&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="encryptionContext" /></td>
    <td><code>object</code></td>
    <td>Encryption context for a Domain.</td>
</tr>
<tr>
    <td><CopyableCode code="kmsKeyArn" /></td>
    <td><code>string</code></td>
    <td> (pattern: &lt;code&gt;arn:aws:kms:&#91;a-z0-9-&#93;+:&#91;0-9&#93;&#123;12&#125;:key/&#91;a-f0-9-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td> (ACTIVE, DELETING, DELETED)</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>object</code></td>
    <td>Tags associated with the Domain</td>
</tr>
<tr>
    <td><CopyableCode code="webAppConfiguration" /></td>
    <td><code>object</code></td>
    <td>Configuration for the Domain web application, including Identity Center settings. If provided, all fields are required.</td>
</tr>
<tr>
    <td><CopyableCode code="webAppUrl" /></td>
    <td><code>string</code></td>
    <td></td>
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
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td> (pattern: &lt;code&gt;arn:aws:health-agent:&#91;a-z0-9-&#93;+:&#91;0-9&#93;&#123;12&#125;:domain/(hai-|dom-)&#91;a-z0-9&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="createdAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when the Domain was created.</td>
</tr>
<tr>
    <td><CopyableCode code="domainId" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the Domain. (pattern: &lt;code&gt;(hai-|dom-)&#91;a-z0-9&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td> (ACTIVE, DELETING, DELETED)</td>
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
    <td>Retrieves information about a Domain.</td>
</tr>
<tr>
    <td><a href="#list_domains"><CopyableCode code="list_domains" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-status"><code>status</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-nextToken"><code>nextToken</code></a></td>
    <td>Lists Domains for a given account.</td>
</tr>
<tr>
    <td><a href="#create_domain"><CopyableCode code="create_domain" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-name"><code>name</code></a></td>
    <td></td>
    <td>Creates a new Domain for managing HealthAgent resources.</td>
</tr>
<tr>
    <td><a href="#delete_domain"><CopyableCode code="delete_domain" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-domain_id"><code>domain_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a Domain and all associated resources.</td>
</tr>
<tr>
    <td><a href="#start_patient_insights_job"><CopyableCode code="start_patient_insights_job" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-domain_id"><code>domain_id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-patientContext"><code>patientContext</code></a>, <a href="#parameter-insightsContext"><code>insightsContext</code></a>, <a href="#parameter-encounterContext"><code>encounterContext</code></a>, <a href="#parameter-userContext"><code>userContext</code></a>, <a href="#parameter-inputDataConfig"><code>inputDataConfig</code></a>, <a href="#parameter-outputDataConfig"><code>outputDataConfig</code></a></td>
    <td></td>
    <td>Starts a new patient insights job.</td>
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
    <td></td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>Maximum number of results to return.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>Token for pagination.</td>
</tr>
<tr id="parameter-status">
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>Filter by Domain status.</td>
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

Retrieves information about a Domain.

```sql
SELECT
name,
arn,
createdAt,
domainId,
encryptionContext,
kmsKeyArn,
status,
tags,
webAppConfiguration,
webAppUrl
FROM aws.connecthealth.domains
WHERE domain_id = '{{ domain_id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_domains">

Lists Domains for a given account.

```sql
SELECT
name,
arn,
createdAt,
domainId,
status
FROM aws.connecthealth.domains
WHERE region = '{{ region }}' -- required
AND status = '{{ status }}'
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

Creates a new Domain for managing HealthAgent resources.

```sql
INSERT INTO aws.connecthealth.domains (
name,
kmsKeyArn,
webAppSetupConfiguration,
tags,
region
)
SELECT 
'{{ name }}' /* required */,
'{{ kmsKeyArn }}',
'{{ webAppSetupConfiguration }}',
'{{ tags }}',
'{{ region }}'
RETURNING
name,
arn,
createdAt,
domainId,
encryptionContext,
kmsKeyArn,
status,
webAppConfiguration,
webAppUrl
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
    - name: kmsKeyArn
      value: "{{ kmsKeyArn }}"
    - name: webAppSetupConfiguration
      description: |
        Input configuration for creating a web application. Used only in CreateDomain operation input.
      value:
        ehrRole: "{{ ehrRole }}"
        idcInstanceId: "{{ idcInstanceId }}"
        idcRegion: "{{ idcRegion }}"
    - name: tags
      value: "{{ tags }}"
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

Deletes a Domain and all associated resources.

```sql
DELETE FROM aws.connecthealth.domains
WHERE domain_id = '{{ domain_id }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="start_patient_insights_job"
    values={[
        { label: 'start_patient_insights_job', value: 'start_patient_insights_job' }
    ]}
>
<TabItem value="start_patient_insights_job">

Starts a new patient insights job.

```sql
EXEC aws.connecthealth.domains.start_patient_insights_job 
@domain_id='{{ domain_id }}' --required, 
@region='{{ region }}' --required 
@@json=
'{
"patientContext": "{{ patientContext }}", 
"insightsContext": "{{ insightsContext }}", 
"encounterContext": "{{ encounterContext }}", 
"userContext": "{{ userContext }}", 
"inputDataConfig": "{{ inputDataConfig }}", 
"outputDataConfig": "{{ outputDataConfig }}", 
"clientToken": "{{ clientToken }}"
}'
;
```
</TabItem>
</Tabs>
