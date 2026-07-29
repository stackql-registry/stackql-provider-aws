--- 
title: security_configurations
hide_title: false
hide_table_of_contents: false
keywords:
  - security_configurations
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

Creates, updates, deletes, gets or lists a <code>security_configurations</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="security_configurations" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.emr_containers.security_configurations" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_security_configuration"
    values={[
        { label: 'describe_security_configuration', value: 'describe_security_configuration' },
        { label: 'list_security_configurations', value: 'list_security_configurations' }
    ]}
>
<TabItem value="describe_security_configuration">

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
    <td>The ID of the security configuration. (pattern: &lt;code&gt;&#91;0-9a-z&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the security configuration. (pattern: &lt;code&gt;&#91;\.\-_/#A-Za-z0-9&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td>The ARN (Amazon Resource Name) of the security configuration. (pattern: &lt;code&gt;^arn:(aws&#91;a-zA-Z0-9-&#93;*):emr-containers:.+:(\d&#123;12&#125;):\/securityconfigurations\/&#91;0-9a-zA-Z&#93;+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time that the job run was created.</td>
</tr>
<tr>
    <td><CopyableCode code="created_by" /></td>
    <td><code>string</code></td>
    <td>The user who created the job run. (pattern: &lt;code&gt;^arn:(aws&#91;a-zA-Z0-9-&#93;*):(iam|sts)::(\d&#123;12&#125;)?:&#91;\w/+=,.@-&#93;+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="security_configuration_data" /></td>
    <td><code>object</code></td>
    <td>Configurations related to the security configuration for the request.</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>object</code></td>
    <td>The tags to assign to the security configuration.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_security_configurations">

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
    <td>The ID of the security configuration. (pattern: &lt;code&gt;&#91;0-9a-z&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the security configuration. (pattern: &lt;code&gt;&#91;\.\-_/#A-Za-z0-9&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td>The ARN (Amazon Resource Name) of the security configuration. (pattern: &lt;code&gt;^arn:(aws&#91;a-zA-Z0-9-&#93;*):emr-containers:.+:(\d&#123;12&#125;):\/securityconfigurations\/&#91;0-9a-zA-Z&#93;+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time that the job run was created.</td>
</tr>
<tr>
    <td><CopyableCode code="created_by" /></td>
    <td><code>string</code></td>
    <td>The user who created the job run. (pattern: &lt;code&gt;^arn:(aws&#91;a-zA-Z0-9-&#93;*):(iam|sts)::(\d&#123;12&#125;)?:&#91;\w/+=,.@-&#93;+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="security_configuration_data" /></td>
    <td><code>object</code></td>
    <td>Configurations related to the security configuration for the request.</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>object</code></td>
    <td>The tags to assign to the security configuration.</td>
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
    <td><a href="#describe_security_configuration"><CopyableCode code="describe_security_configuration" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-security_configuration_id"><code>security_configuration_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Displays detailed information about a specified security configuration. Security configurations in Amazon EMR on EKS are templates for different security setups. You can use security configurations to configure the Lake Formation integration setup. You can also create a security configuration to re-use a security setup each time you create a virtual cluster.</td>
</tr>
<tr>
    <td><a href="#list_security_configurations"><CopyableCode code="list_security_configurations" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-createdAfter"><code>createdAfter</code></a>, <a href="#parameter-createdBefore"><code>createdBefore</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-nextToken"><code>nextToken</code></a></td>
    <td>Lists security configurations based on a set of parameters. Security configurations in Amazon EMR on EKS are templates for different security setups. You can use security configurations to configure the Lake Formation integration setup. You can also create a security configuration to re-use a security setup each time you create a virtual cluster.</td>
</tr>
<tr>
    <td><a href="#create_security_configuration"><CopyableCode code="create_security_configuration" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-clientToken"><code>clientToken</code></a>, <a href="#parameter-name"><code>name</code></a>, <a href="#parameter-securityConfigurationData"><code>securityConfigurationData</code></a></td>
    <td></td>
    <td>Creates a security configuration. Security configurations in Amazon EMR on EKS are templates for different security setups. You can use security configurations to configure the Lake Formation integration setup. You can also create a security configuration to re-use a security setup each time you create a virtual cluster.</td>
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
<tr id="parameter-security_configuration_id">
    <td><CopyableCode code="security_configuration_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the security configuration.</td>
</tr>
<tr id="parameter-createdAfter">
    <td><CopyableCode code="createdAfter" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time after which the security configuration was created.</td>
</tr>
<tr id="parameter-createdBefore">
    <td><CopyableCode code="createdBefore" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time before which the security configuration was created.</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of security configurations the operation can list.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>The token for the next set of security configurations to return.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_security_configuration"
    values={[
        { label: 'describe_security_configuration', value: 'describe_security_configuration' },
        { label: 'list_security_configurations', value: 'list_security_configurations' }
    ]}
>
<TabItem value="describe_security_configuration">

Displays detailed information about a specified security configuration. Security configurations in Amazon EMR on EKS are templates for different security setups. You can use security configurations to configure the Lake Formation integration setup. You can also create a security configuration to re-use a security setup each time you create a virtual cluster.

```sql
SELECT
id,
name,
arn,
created_at,
created_by,
security_configuration_data,
tags
FROM aws.emr_containers.security_configurations
WHERE security_configuration_id = '{{ security_configuration_id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_security_configurations">

Lists security configurations based on a set of parameters. Security configurations in Amazon EMR on EKS are templates for different security setups. You can use security configurations to configure the Lake Formation integration setup. You can also create a security configuration to re-use a security setup each time you create a virtual cluster.

```sql
SELECT
id,
name,
arn,
created_at,
created_by,
security_configuration_data,
tags
FROM aws.emr_containers.security_configurations
WHERE region = '{{ region }}' -- required
AND createdAfter = '{{ createdAfter }}'
AND createdBefore = '{{ createdBefore }}'
AND maxResults = '{{ maxResults }}'
AND nextToken = '{{ nextToken }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_security_configuration"
    values={[
        { label: 'create_security_configuration', value: 'create_security_configuration' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_security_configuration">

Creates a security configuration. Security configurations in Amazon EMR on EKS are templates for different security setups. You can use security configurations to configure the Lake Formation integration setup. You can also create a security configuration to re-use a security setup each time you create a virtual cluster.

```sql
INSERT INTO aws.emr_containers.security_configurations (
clientToken,
name,
containerProvider,
securityConfigurationData,
tags,
region
)
SELECT 
'{{ clientToken }}' /* required */,
'{{ name }}' /* required */,
'{{ containerProvider }}',
'{{ securityConfigurationData }}' /* required */,
'{{ tags }}',
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
- name: security_configurations
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the security_configurations resource.
    - name: clientToken
      value: "{{ clientToken }}"
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
    - name: securityConfigurationData
      description: |
        Configurations related to the security configuration for the request.
      value:
        authorizationConfiguration:
          lakeFormationConfiguration:
            authorizedSessionTagValue: "{{ authorizedSessionTagValue }}"
            secureNamespaceInfo:
              clusterId: "{{ clusterId }}"
              namespace: "{{ namespace }}"
            queryEngineRoleArn: "{{ queryEngineRoleArn }}"
          encryptionConfiguration:
            inTransitEncryptionConfiguration:
              tlsCertificateConfiguration:
                certificateProviderType: "{{ certificateProviderType }}"
                publicCertificateSecretArn: "{{ publicCertificateSecretArn }}"
                privateCertificateSecretArn: "{{ privateCertificateSecretArn }}"
    - name: tags
      value: "{{ tags }}"
`}</CodeBlock>

</TabItem>
</Tabs>
