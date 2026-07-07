--- 
title: virtual_clusters
hide_title: false
hide_table_of_contents: false
keywords:
  - virtual_clusters
  - emr_containers
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

Creates, updates, deletes, gets or lists a <code>virtual_clusters</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="virtual_clusters" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.emr_containers.virtual_clusters" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_virtual_cluster"
    values={[
        { label: 'describe_virtual_cluster', value: 'describe_virtual_cluster' },
        { label: 'list_virtual_clusters', value: 'list_virtual_clusters' }
    ]}
>
<TabItem value="describe_virtual_cluster">

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
    <td>The ID of the virtual cluster. (pattern: &lt;code&gt;&#91;0-9a-z&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the virtual cluster. (pattern: &lt;code&gt;&#91;\.\-_/#A-Za-z0-9&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the virtual cluster. (pattern: &lt;code&gt;^arn:(aws&#91;a-zA-Z0-9-&#93;*):emr-containers:.+:(\d&#123;12&#125;):\/virtualclusters\/&#91;0-9a-zA-Z&#93;+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="containerProvider" /></td>
    <td><code>object</code></td>
    <td>The information about the container provider.</td>
</tr>
<tr>
    <td><CopyableCode code="createdAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time when the virtual cluster is created.</td>
</tr>
<tr>
    <td><CopyableCode code="securityConfigurationId" /></td>
    <td><code>string</code></td>
    <td>The ID of the security configuration. (pattern: &lt;code&gt;&#91;0-9a-z&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>The state of the virtual cluster. (RUNNING, TERMINATING, TERMINATED, ARRESTED)</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>object</code></td>
    <td>The assigned tags of the virtual cluster.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_virtual_clusters">

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
    <td>The ID of the virtual cluster. (pattern: &lt;code&gt;&#91;0-9a-z&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the virtual cluster. (pattern: &lt;code&gt;&#91;\.\-_/#A-Za-z0-9&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the virtual cluster. (pattern: &lt;code&gt;^arn:(aws&#91;a-zA-Z0-9-&#93;*):emr-containers:.+:(\d&#123;12&#125;):\/virtualclusters\/&#91;0-9a-zA-Z&#93;+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="containerProvider" /></td>
    <td><code>object</code></td>
    <td>The information about the container provider.</td>
</tr>
<tr>
    <td><CopyableCode code="createdAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time when the virtual cluster is created.</td>
</tr>
<tr>
    <td><CopyableCode code="securityConfigurationId" /></td>
    <td><code>string</code></td>
    <td>The ID of the security configuration. (pattern: &lt;code&gt;&#91;0-9a-z&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>The state of the virtual cluster. (RUNNING, TERMINATING, TERMINATED, ARRESTED)</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>object</code></td>
    <td>The assigned tags of the virtual cluster.</td>
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
    <td><a href="#describe_virtual_cluster"><CopyableCode code="describe_virtual_cluster" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-virtual_cluster_id"><code>virtual_cluster_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Displays detailed information about a specified virtual cluster. Virtual cluster is a managed entity on Amazon EMR on EKS. You can create, describe, list and delete virtual clusters. They do not consume any additional resource in your system. A single virtual cluster maps to a single Kubernetes namespace. Given this relationship, you can model virtual clusters the same way you model Kubernetes namespaces to meet your requirements.</td>
</tr>
<tr>
    <td><a href="#list_virtual_clusters"><CopyableCode code="list_virtual_clusters" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-containerProviderId"><code>containerProviderId</code></a>, <a href="#parameter-containerProviderType"><code>containerProviderType</code></a>, <a href="#parameter-createdAfter"><code>createdAfter</code></a>, <a href="#parameter-createdBefore"><code>createdBefore</code></a>, <a href="#parameter-states"><code>states</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-nextToken"><code>nextToken</code></a>, <a href="#parameter-eksAccessEntryIntegrated"><code>eksAccessEntryIntegrated</code></a></td>
    <td>Lists information about the specified virtual cluster. Virtual cluster is a managed entity on Amazon EMR on EKS. You can create, describe, list and delete virtual clusters. They do not consume any additional resource in your system. A single virtual cluster maps to a single Kubernetes namespace. Given this relationship, you can model virtual clusters the same way you model Kubernetes namespaces to meet your requirements.</td>
</tr>
<tr>
    <td><a href="#create_virtual_cluster"><CopyableCode code="create_virtual_cluster" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-name"><code>name</code></a>, <a href="#parameter-containerProvider"><code>containerProvider</code></a>, <a href="#parameter-clientToken"><code>clientToken</code></a></td>
    <td></td>
    <td>Creates a virtual cluster. Virtual cluster is a managed entity on Amazon EMR on EKS. You can create, describe, list and delete virtual clusters. They do not consume any additional resource in your system. A single virtual cluster maps to a single Kubernetes namespace. Given this relationship, you can model virtual clusters the same way you model Kubernetes namespaces to meet your requirements.</td>
</tr>
<tr>
    <td><a href="#delete_virtual_cluster"><CopyableCode code="delete_virtual_cluster" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-virtual_cluster_id"><code>virtual_cluster_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a virtual cluster. Virtual cluster is a managed entity on Amazon EMR on EKS. You can create, describe, list and delete virtual clusters. They do not consume any additional resource in your system. A single virtual cluster maps to a single Kubernetes namespace. Given this relationship, you can model virtual clusters the same way you model Kubernetes namespaces to meet your requirements.</td>
</tr>
<tr>
    <td><a href="#cancel_job_run"><CopyableCode code="cancel_job_run" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-job_run_id"><code>job_run_id</code></a>, <a href="#parameter-virtual_cluster_id"><code>virtual_cluster_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Cancels a job run. A job run is a unit of work, such as a Spark jar, PySpark script, or SparkSQL query, that you submit to Amazon EMR on EKS.</td>
</tr>
<tr>
    <td><a href="#start_job_run"><CopyableCode code="start_job_run" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-virtual_cluster_id"><code>virtual_cluster_id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-clientToken"><code>clientToken</code></a></td>
    <td></td>
    <td>Starts a job run. A job run is a unit of work, such as a Spark jar, PySpark script, or SparkSQL query, that you submit to Amazon EMR on EKS.</td>
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
<tr id="parameter-job_run_id">
    <td><CopyableCode code="job_run_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the job run to cancel.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-virtual_cluster_id">
    <td><CopyableCode code="virtual_cluster_id" /></td>
    <td><code>string</code></td>
    <td>The virtual cluster ID for which the job run request is submitted.</td>
</tr>
<tr id="parameter-containerProviderId">
    <td><CopyableCode code="containerProviderId" /></td>
    <td><code>string</code></td>
    <td>The container provider ID of the virtual cluster.</td>
</tr>
<tr id="parameter-containerProviderType">
    <td><CopyableCode code="containerProviderType" /></td>
    <td><code>string</code></td>
    <td>The container provider type of the virtual cluster. Amazon EKS is the only supported type as of now.</td>
</tr>
<tr id="parameter-createdAfter">
    <td><CopyableCode code="createdAfter" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time after which the virtual clusters are created.</td>
</tr>
<tr id="parameter-createdBefore">
    <td><CopyableCode code="createdBefore" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time before which the virtual clusters are created.</td>
</tr>
<tr id="parameter-eksAccessEntryIntegrated">
    <td><CopyableCode code="eksAccessEntryIntegrated" /></td>
    <td><code>boolean</code></td>
    <td>Optional Boolean that specifies whether the operation should return the virtual clusters that have the access entry integration enabled or disabled. If not specified, the operation returns all applicable virtual clusters.</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of virtual clusters that can be listed.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>The token for the next set of virtual clusters to return.</td>
</tr>
<tr id="parameter-states">
    <td><CopyableCode code="states" /></td>
    <td><code>array</code></td>
    <td>The states of the requested virtual clusters.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_virtual_cluster"
    values={[
        { label: 'describe_virtual_cluster', value: 'describe_virtual_cluster' },
        { label: 'list_virtual_clusters', value: 'list_virtual_clusters' }
    ]}
>
<TabItem value="describe_virtual_cluster">

Displays detailed information about a specified virtual cluster. Virtual cluster is a managed entity on Amazon EMR on EKS. You can create, describe, list and delete virtual clusters. They do not consume any additional resource in your system. A single virtual cluster maps to a single Kubernetes namespace. Given this relationship, you can model virtual clusters the same way you model Kubernetes namespaces to meet your requirements.

```sql
SELECT
id,
name,
arn,
containerProvider,
createdAt,
securityConfigurationId,
state,
tags
FROM aws.emr_containers.virtual_clusters
WHERE virtual_cluster_id = '{{ virtual_cluster_id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_virtual_clusters">

Lists information about the specified virtual cluster. Virtual cluster is a managed entity on Amazon EMR on EKS. You can create, describe, list and delete virtual clusters. They do not consume any additional resource in your system. A single virtual cluster maps to a single Kubernetes namespace. Given this relationship, you can model virtual clusters the same way you model Kubernetes namespaces to meet your requirements.

```sql
SELECT
id,
name,
arn,
containerProvider,
createdAt,
securityConfigurationId,
state,
tags
FROM aws.emr_containers.virtual_clusters
WHERE region = '{{ region }}' -- required
AND containerProviderId = '{{ containerProviderId }}'
AND containerProviderType = '{{ containerProviderType }}'
AND createdAfter = '{{ createdAfter }}'
AND createdBefore = '{{ createdBefore }}'
AND states = '{{ states }}'
AND maxResults = '{{ maxResults }}'
AND nextToken = '{{ nextToken }}'
AND eksAccessEntryIntegrated = '{{ eksAccessEntryIntegrated }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_virtual_cluster"
    values={[
        { label: 'create_virtual_cluster', value: 'create_virtual_cluster' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_virtual_cluster">

Creates a virtual cluster. Virtual cluster is a managed entity on Amazon EMR on EKS. You can create, describe, list and delete virtual clusters. They do not consume any additional resource in your system. A single virtual cluster maps to a single Kubernetes namespace. Given this relationship, you can model virtual clusters the same way you model Kubernetes namespaces to meet your requirements.

```sql
INSERT INTO aws.emr_containers.virtual_clusters (
name,
containerProvider,
clientToken,
tags,
securityConfigurationId,
region
)
SELECT 
'{{ name }}' /* required */,
'{{ containerProvider }}' /* required */,
'{{ clientToken }}' /* required */,
'{{ tags }}',
'{{ securityConfigurationId }}',
'{{ region }}'
RETURNING
id,
name,
arn
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: virtual_clusters
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the virtual_clusters resource.
    - name: name
      value: "{{ name }}"
    - name: containerProvider
      description: |
        The information about the container provider.
      value:
        type_: "{{ type_ }}"
        id: "{{ id }}"
        info:
          eksInfo:
            namespace: "{{ namespace }}"
            nodeLabel: "{{ nodeLabel }}"
    - name: clientToken
      value: "{{ clientToken }}"
    - name: tags
      value: "{{ tags }}"
    - name: securityConfigurationId
      value: "{{ securityConfigurationId }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_virtual_cluster"
    values={[
        { label: 'delete_virtual_cluster', value: 'delete_virtual_cluster' }
    ]}
>
<TabItem value="delete_virtual_cluster">

Deletes a virtual cluster. Virtual cluster is a managed entity on Amazon EMR on EKS. You can create, describe, list and delete virtual clusters. They do not consume any additional resource in your system. A single virtual cluster maps to a single Kubernetes namespace. Given this relationship, you can model virtual clusters the same way you model Kubernetes namespaces to meet your requirements.

```sql
DELETE FROM aws.emr_containers.virtual_clusters
WHERE virtual_cluster_id = '{{ virtual_cluster_id }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="cancel_job_run"
    values={[
        { label: 'cancel_job_run', value: 'cancel_job_run' },
        { label: 'start_job_run', value: 'start_job_run' }
    ]}
>
<TabItem value="cancel_job_run">

Cancels a job run. A job run is a unit of work, such as a Spark jar, PySpark script, or SparkSQL query, that you submit to Amazon EMR on EKS.

```sql
EXEC aws.emr_containers.virtual_clusters.cancel_job_run 
@job_run_id='{{ job_run_id }}' --required, 
@virtual_cluster_id='{{ virtual_cluster_id }}' --required, 
@region='{{ region }}' --required
;
```
</TabItem>
<TabItem value="start_job_run">

Starts a job run. A job run is a unit of work, such as a Spark jar, PySpark script, or SparkSQL query, that you submit to Amazon EMR on EKS.

```sql
EXEC aws.emr_containers.virtual_clusters.start_job_run 
@virtual_cluster_id='{{ virtual_cluster_id }}' --required, 
@region='{{ region }}' --required 
@@json=
'{
"name": "{{ name }}", 
"clientToken": "{{ clientToken }}", 
"executionRoleArn": "{{ executionRoleArn }}", 
"releaseLabel": "{{ releaseLabel }}", 
"jobDriver": "{{ jobDriver }}", 
"configurationOverrides": "{{ configurationOverrides }}", 
"tags": "{{ tags }}", 
"jobTemplateId": "{{ jobTemplateId }}", 
"jobTemplateParameters": "{{ jobTemplateParameters }}", 
"retryPolicyConfiguration": "{{ retryPolicyConfiguration }}"
}'
;
```
</TabItem>
</Tabs>
