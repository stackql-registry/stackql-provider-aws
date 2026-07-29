--- 
title: pull_through_cache_rules
hide_title: false
hide_table_of_contents: false
keywords:
  - pull_through_cache_rules
  - ecr
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

Creates, updates, deletes, gets or lists a <code>pull_through_cache_rules</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="pull_through_cache_rules" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.ecr.pull_through_cache_rules" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_pull_through_cache_rules"
    values={[
        { label: 'describe_pull_through_cache_rules', value: 'describe_pull_through_cache_rules' }
    ]}
>
<TabItem value="describe_pull_through_cache_rules">

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
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time the pull through cache was created.</td>
</tr>
<tr>
    <td><CopyableCode code="credential_arn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the Secrets Manager secret associated with the pull through cache rule. (pattern: &lt;code&gt;^arn:aws(-\w+)*:secretsmanager:&#91;a-zA-Z0-9-:&#93;+:secret:ecr\-pullthroughcache\/&#91;a-zA-Z0-9\/_+=.@-&#93;+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="custom_role_arn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the IAM role associated with the pull through cache rule.</td>
</tr>
<tr>
    <td><CopyableCode code="ecr_repository_prefix" /></td>
    <td><code>string</code></td>
    <td>The Amazon ECR repository prefix associated with the pull through cache rule. (pattern: &lt;code&gt;^(&#91;a-z0-9&#93;+((\.|_|__|-+)&#91;a-z0-9&#93;+)*(\/&#91;a-z0-9&#93;+((\.|_|__|-+)&#91;a-z0-9&#93;+)*)*\/?|ROOT)$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="registry_id" /></td>
    <td><code>string</code></td>
    <td>The Amazon Web Services account ID associated with the registry the pull through cache rule is associated with. (pattern: &lt;code&gt;&#91;0-9&#93;&#123;12&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="updated_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time, in JavaScript date format, when the pull through cache rule was last updated.</td>
</tr>
<tr>
    <td><CopyableCode code="upstream_registry" /></td>
    <td><code>string</code></td>
    <td>The name of the upstream source registry associated with the pull through cache rule. (ecr, ecr-public, quay, k8s, docker-hub, github-container-registry, azure-container-registry, gitlab-container-registry, chainguard)</td>
</tr>
<tr>
    <td><CopyableCode code="upstream_registry_url" /></td>
    <td><code>string</code></td>
    <td>The upstream registry URL associated with the pull through cache rule.</td>
</tr>
<tr>
    <td><CopyableCode code="upstream_repository_prefix" /></td>
    <td><code>string</code></td>
    <td>The upstream repository prefix associated with the pull through cache rule. (pattern: &lt;code&gt;^(&#91;a-z0-9&#93;+((\.|_|__|-+)&#91;a-z0-9&#93;+)*(\/&#91;a-z0-9&#93;+((\.|_|__|-+)&#91;a-z0-9&#93;+)*)*\/?|ROOT)$&lt;/code&gt;)</td>
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
    <td><a href="#describe_pull_through_cache_rules"><CopyableCode code="describe_pull_through_cache_rules" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns the pull through cache rules for a registry.</td>
</tr>
<tr>
    <td><a href="#create_pull_through_cache_rule"><CopyableCode code="create_pull_through_cache_rule" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-ecrRepositoryPrefix"><code>ecrRepositoryPrefix</code></a>, <a href="#parameter-upstreamRegistryUrl"><code>upstreamRegistryUrl</code></a></td>
    <td></td>
    <td>Creates a pull through cache rule. A pull through cache rule provides a way to cache images from an upstream registry source in your Amazon ECR private registry. For more information, see Using pull through cache rules in the Amazon Elastic Container Registry User Guide.</td>
</tr>
<tr>
    <td><a href="#update_pull_through_cache_rule"><CopyableCode code="update_pull_through_cache_rule" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-ecrRepositoryPrefix"><code>ecrRepositoryPrefix</code></a></td>
    <td></td>
    <td>Updates an existing pull through cache rule.</td>
</tr>
<tr>
    <td><a href="#delete_pull_through_cache_rule"><CopyableCode code="delete_pull_through_cache_rule" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a pull through cache rule.</td>
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
    defaultValue="describe_pull_through_cache_rules"
    values={[
        { label: 'describe_pull_through_cache_rules', value: 'describe_pull_through_cache_rules' }
    ]}
>
<TabItem value="describe_pull_through_cache_rules">

Returns the pull through cache rules for a registry.

```sql
SELECT
created_at,
credential_arn,
custom_role_arn,
ecr_repository_prefix,
registry_id,
updated_at,
upstream_registry,
upstream_registry_url,
upstream_repository_prefix
FROM aws.ecr.pull_through_cache_rules
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_pull_through_cache_rule"
    values={[
        { label: 'create_pull_through_cache_rule', value: 'create_pull_through_cache_rule' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_pull_through_cache_rule">

Creates a pull through cache rule. A pull through cache rule provides a way to cache images from an upstream registry source in your Amazon ECR private registry. For more information, see Using pull through cache rules in the Amazon Elastic Container Registry User Guide.

```sql
INSERT INTO aws.ecr.pull_through_cache_rules (
ecrRepositoryPrefix,
upstreamRegistryUrl,
registryId,
upstreamRegistry,
credentialArn,
customRoleArn,
upstreamRepositoryPrefix,
region
)
SELECT 
'{{ ecrRepositoryPrefix }}' /* required */,
'{{ upstreamRegistryUrl }}' /* required */,
'{{ registryId }}',
'{{ upstreamRegistry }}',
'{{ credentialArn }}',
'{{ customRoleArn }}',
'{{ upstreamRepositoryPrefix }}',
'{{ region }}'
RETURNING
created_at,
credential_arn,
custom_role_arn,
ecr_repository_prefix,
registry_id,
upstream_registry,
upstream_registry_url,
upstream_repository_prefix
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: pull_through_cache_rules
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the pull_through_cache_rules resource.
    - name: ecrRepositoryPrefix
      value: "{{ ecrRepositoryPrefix }}"
      description: |
        The repository name prefix to use when caching images from the source registry. There is always an assumed / applied to the end of the prefix. If you specify ecr-public as the prefix, Amazon ECR treats that as ecr-public/.
    - name: upstreamRegistryUrl
      value: "{{ upstreamRegistryUrl }}"
      description: |
        The registry URL of the upstream public registry to use as the source for the pull through cache rule. The following is the syntax to use for each supported upstream registry. Amazon ECR (ecr) – \`<accountId>\`.dkr.ecr.\`<region>\`.amazonaws.com Amazon ECR Public (ecr-public) – public.ecr.aws Docker Hub (docker-hub) – registry-1.docker.io GitHub Container Registry (github-container-registry) – ghcr.io GitLab Container Registry (gitlab-container-registry) – registry.gitlab.com Kubernetes (k8s) – registry.k8s.io Microsoft Azure Container Registry (azure-container-registry) – \`<custom>\`.azurecr.io Quay (quay) – quay.io
    - name: registryId
      value: "{{ registryId }}"
      description: |
        The Amazon Web Services account ID associated with the registry to create the pull through cache rule for. If you do not specify a registry, the default registry is assumed.
    - name: upstreamRegistry
      value: "{{ upstreamRegistry }}"
      description: |
        The name of the upstream registry.
      valid_values: ['ecr', 'ecr-public', 'quay', 'k8s', 'docker-hub', 'github-container-registry', 'azure-container-registry', 'gitlab-container-registry', 'chainguard']
    - name: credentialArn
      value: "{{ credentialArn }}"
      description: |
        The Amazon Resource Name (ARN) of the Amazon Web Services Secrets Manager secret that identifies the credentials to authenticate to the upstream registry.
    - name: customRoleArn
      value: "{{ customRoleArn }}"
      description: |
        Amazon Resource Name (ARN) of the IAM role to be assumed by Amazon ECR to authenticate to the ECR upstream registry. This role must be in the same account as the registry that you are configuring.
    - name: upstreamRepositoryPrefix
      value: "{{ upstreamRepositoryPrefix }}"
      description: |
        The repository name prefix of the upstream registry to match with the upstream repository name. When this field isn't specified, Amazon ECR will use the ROOT.
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_pull_through_cache_rule"
    values={[
        { label: 'update_pull_through_cache_rule', value: 'update_pull_through_cache_rule' }
    ]}
>
<TabItem value="update_pull_through_cache_rule">

Updates an existing pull through cache rule.

```sql
UPDATE aws.ecr.pull_through_cache_rules
SET 
registryId = '{{ registryId }}',
ecrRepositoryPrefix = '{{ ecrRepositoryPrefix }}',
credentialArn = '{{ credentialArn }}',
customRoleArn = '{{ customRoleArn }}'
WHERE 
region = '{{ region }}' --required
AND ecrRepositoryPrefix = '{{ ecrRepositoryPrefix }}' --required
RETURNING
credential_arn,
custom_role_arn,
ecr_repository_prefix,
registry_id,
updated_at,
upstream_repository_prefix;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_pull_through_cache_rule"
    values={[
        { label: 'delete_pull_through_cache_rule', value: 'delete_pull_through_cache_rule' }
    ]}
>
<TabItem value="delete_pull_through_cache_rule">

Deletes a pull through cache rule.

```sql
DELETE FROM aws.ecr.pull_through_cache_rules
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
